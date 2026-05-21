import { ChartIcon } from '@/components/icons/reports-icon';
import { Card } from '@/components/shared/card';
import DateInput from '@/components/shared/date-input';
import { DownloadButton } from '@/components/shared/download-button';
import SearchInput from '@/components/shared/search-input';
import SectionHeader from '@/components/shared/section-header';
import Table from '@/components/shared/table';
import OrderDetailsModal from '@/features/order/components/order-details-modal';
import type { OrderDetails } from '@/features/order/types';
import { reportListData } from '@/features/reports/data';
import { getDeliveryStatusBadge, getPaymentStatusBadge } from '@/features/reports/utils/badge-helpers';
import { Badge } from 'dst-rg';
import { Eye } from 'lucide-react';
import { useMemo, useState } from 'react';

const ITEMS_PER_PAGE = 10;

export default function ReportsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderDetails | null>(null);

  const handleViewOrderDetails = (rowData: any) => {
    // Transform report data to OrderDetails format
    const orderDetails: OrderDetails = {
      id: rowData.orderId,
      date: rowData.reservationDate,
      time: rowData.mealType === 'نهار' ? '۱۲:۰۰ - ۱۳:۰۰' : rowData.mealType === 'شام' ? '۱۹:۰۰ - ۲۰:۰۰' : '۰۸:۰۰ - ۰۹:۰۰',
      mealType: rowData.mealType as 'صبحانه' | 'ناهار' | 'شام',
      delivery: 'تحویل حضوری',
      items: [
        {
          title: 'سفارش گروهی',
          price: parseFloat(rowData.totalAmount.replace(/,/g, '')),
          quantity: `${rowData.orderCount ?? 0} پرس`,
        }
      ],
      totalAmount: parseFloat(rowData.totalAmount.replace(/,/g, '')),
      status: getPaymentStatusBadge(rowData.paymentStatus).label,
      statusColor: getPaymentStatusBadge(rowData.paymentStatus).color === 'success' ? 'green' :
        getPaymentStatusBadge(rowData.paymentStatus).color === 'error' ? 'red' : 'yellow',
    };

    setSelectedOrder(orderDetails);
    setIsOrderDetailsModalOpen(true);
  };

  const columns = [
    {
      id: 'orderId', label: 'شماره سفارش', icon: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.33268 0.667969V10.0013M5.33268 10.0013L9.99935 5.33464M5.33268 10.0013L0.666016 5.33464" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`},
    {
      id: 'customerName',
      label: 'نام مشتری',
    },
    {
      id: 'branch',
      label: 'شعبه',
    },
    {
      id: 'mealType',
      label: 'وعده',
      render: (value: string) => {
        return (
          <Badge color='gray' className="whitespace-nowrap">
            <span className="flex items-center gap-1">
              {value}
            </span>
          </Badge>
        );
      },
    },
    { id: 'reservationDate', label: 'تاریخ' },
    {
      id: 'driverName',
      label: 'نام راننده',
    },
    {
      id: 'deliveryStatus',
      label: 'وضعیت تحویل',
      render: (value: string) => {
        const badge = getDeliveryStatusBadge(value);
        return (
          <Badge color={badge.color} className="whitespace-nowrap">
            <span className="flex items-center gap-1">
              {badge.label}
            </span>
          </Badge>
        );
      },
    },
    {
      id: 'totalAmount',
      label: 'قیمت کل',
      render: (value: string) => `${value} تومان`,
    },
    {
      id: 'actions',
      label: '',
      render: (_value: any, rowData: any) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleViewOrderDetails(rowData)}
            className="flex items-center justify-center p-2 hover:bg-gray-light-100 rounded-lg transition-colors"
            aria-label="مشاهده جزئیات"
          >
            <Eye className="w-5 h-5 text-gray-light-600" />
          </button>
        </div>
      ),
    },
  ];

  const { paginatedData, totalPages, totals } = useMemo(() => {
    const totalPages = Math.ceil(reportListData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = reportListData.slice(startIndex, endIndex);

    // Calculate totals
    const totalAmount = reportListData.reduce((sum, item) => {
      const amount = parseFloat(item.totalAmount.replace(/,/g, ''));
      return sum + amount;
    }, 0);

    const averageAmount = reportListData.reduce((sum, item) => {
      const amount = parseFloat(item.averageAmount.replace(/,/g, ''));
      return sum + amount;
    }, 0) / reportListData.length;

    const totals = {
      totalAmount: totalAmount.toLocaleString('en-US'),
      averageAmount: Math.round(averageAmount).toLocaleString('en-US'),
    };

    return { paginatedData, totalPages, totals };
  }, [currentPage]);

  const pagination = {
    currentPage,
    totalPages,
    onPageChange: (page: number) => {
      setCurrentPage(page);
    },
  };

  const summaryRow = (
    <tr className="border-b-2 border-gray-light-200 font-semibold sticky top-0 z-10 text-rtext-primary-900">
      <td className="px-3xl py-xl text-sm">
        مجموع
      </td>
      <td className="px-3xl py-xl text-sm"></td>
      <td className="px-3xl py-xl text-sm"></td>
      <td className="px-3xl py-xl text-sm"></td>
      <td className="px-3xl py-xl text-sm"></td>
      <td className="px-3xl py-xl text-sm"></td>
      <td className="px-3xl py-xl text-sm"></td>
      <td className="px-3xl py-xl text-sm">
        {totals.totalAmount} تومان
      </td>
    </tr>
  );

  return (
    <>
      <Card className="mt-4xl flex flex-col gap-3xl p-3xl">
        <SectionHeader title="سفارش‌های تکمیل شده" icon={<ChartIcon />} >
          <SearchInput
            searchValue={''}
            onSearch={() => { }}
            placeholder="جستجو در شماره سفارش..." />
          <DateInput onChange={(dates: any) => {
            console.log('Start date:', dates[0]);
            console.log('End date:', dates[1]);
          }} />

          {/* Todo: use reports url when api is ready */}
          <DownloadButton
            url="/api/contracts/export"
            fileName="contracts.xlsx"
          />
        </SectionHeader>
        <hr className="border-gray-light-200" />
        <Table columns={columns} data={paginatedData} pagination={pagination} summaryRow={summaryRow} />
      </Card>

      <OrderDetailsModal
        isOpen={isOrderDetailsModalOpen}
        onClose={() => setIsOrderDetailsModalOpen(false)}
        order={selectedOrder}
      />
    </>
  );
}