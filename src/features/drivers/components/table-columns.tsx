import { Eye } from 'lucide-react';
import { Badge, TooltipWrapper } from 'rg-dst';
import type { TableColumn } from '@/components/shared/table';
import type { DriverItem } from '../types';


export const driverTableColumns = (
  onAllocatedOrders: (row: DriverItem) => void,
): TableColumn<DriverItem>[] => [
  {
    id: 'id',
    label: 'کد راننده',
    accessor: (row) => row.id,
  },
  {
    id: 'نام و نام خانوادگی',
    label: 'نام راننده',
    accessor: (row) => row.fullName,
  },
  {
    id: 'vehicleType',
    label: 'نوع خودرو',
    accessor: (row) => row.vehicleType,
  },

  {
    id: 'plate',
    label: 'پلاک خودرو',
    accessor: (row) => row.plate,
  },
  {
    id: 'phone',
    label: 'شماره تماس',
    accessor: (row) => row.phone,
  },
  {
    id: 'status',
    label: 'وضعیت حساب',
    accessor: (row) => row.status,
    render: (value: DriverItem['status']) => (
      <Badge color={value === 'active' ? 'success' : 'error'}>
        {value === 'active' ? 'فعال' : 'غیرفعال'}
      </Badge>
    ),
  },
  {
    id: 'actions',
    label: '',
    render: (_, row) => (
      <TooltipWrapper
        content="سفارشات تخصیص یافته"
        position="top"
        contentClassName="text-xs font-semibold"
      >
        <Eye
          size={20}
          className="cursor-pointer text-gray-light-700 hover:text-primary-600 transition-colors"
          onClick={() => onAllocatedOrders(row)}
        />
      </TooltipWrapper>
    ),
  },
];