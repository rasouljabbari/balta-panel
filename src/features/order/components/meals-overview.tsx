import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '@/components/shared/drop-down';
import SearchInput from '@/components/shared/search-input';
import type { MealItem, OrderItem } from '../types';
import { mealsTableColumns } from './meal-table-columns';
import OrderDetailsPanel from './order-detail-panel';
import OrderEmptyState from './order-empty-state';
import OrderList from './order-list';


export default function MealsOverview() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<number | false>(false);
  


const orders: OrderItem[] = [
  {
    id: 2448,
    title: 'آذرآبادگان نوین صنعت برادران',
    branch: 'شعبه ۱ آبرسان',
    status: 'تحویل به راننده',
    time: '۱۴:۰۰',
    foodCount: '۴۰ پرس',
    packaging: 'آلومینیوم',
  },
  {
    id: 2449,
    title: 'شرکت توسعه فناوری پارس',
    branch: 'شعبه مرکزی',
    status: 'در حال آماده‌سازی',
    time: '۱۳:۳۰',
    foodCount: '۲۵ پرس',
    packaging: 'پلاستیکی',
  },
  {
    id: 2450,
    title: 'صنایع غذایی بهاران',
    branch: 'شعبه غرب',
    status: 'ثبت شده',
    time: '۱۵:۰۰',
    foodCount: '۶۰ پرس',
    packaging: 'آلومینیوم',
  },
  {
    id: 2451,
    title: 'کترینگ سبز',
    branch: 'شعبه شرق',
    status: 'تحویل شده',
    time: '۱۱:۴۵',
    foodCount: '۳۰ پرس',
    packaging: 'کاغذی',
  },
  {
    id: 2452,
    title: 'کترینگ سبز',
    branch: 'شعبه شرق',
    status: 'لغو شده',
    time: '۱۲:۳۰',
    foodCount: '۳۰ پرس',
    packaging: 'کاغذی',
  },
];
  const meals: MealItem[] = [
    {
      id: 1,
      name: 'چلو کباب',
      menuType: 'اقتصادی',
      count: 40,
      price: 250000,
    },
    {
      id: 2,
      name: 'زرشک پلو با مرغ',
      menuType: 'ویژه',
      count: 25,
      price: 180000,
    },
  ];

  const totalCount = meals.reduce((sum, item) => sum + item.count, 0);

  const totalPrice = meals.reduce((sum, item) => sum + item.price, 0);

  const data: MealItem[] = [
    ...meals,
    {
      id: 'total',
      name: '',
      menuType: '',
      count: totalCount,
      price: totalPrice,
      isTotal: true,
    },
  ];

  const logs = [
    {
      id: 1,
      title: 'تغییر در سفارش',
      description:
        'سفارش در تاریخ ۱۴۰۴/۰۳/۲۴ و ساعت ۱۲:۳۲ توسط نماینده ویرایش گردید.',
    },
    {
      id: 2,
      title: 'تایید سفارش',
      description:
        'سفارش در تاریخ ۱۴۰۴/۰۳/۲۳ و ساعت ۱۰:۱۵ توسط سیستم تایید شد.',
    },
    {
      id: 3,
      title: 'ثبت سفارش',
      description: 'سفارش در تاریخ ۱۴۰۴/۰۳/۲۳ و ساعت ۰۹:۴۰ توسط کاربر ثبت شد.',
    },
  ];

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 bg-white border-l border-rborder-primary min-h-[982px]">
        <div className="flex items-center gap-xl p-3xl">
          <div className="flex items-center rounded-md border border-gray-light-200 p-[10px]">
            <ArrowRight
              size={20}
              color="#323232"
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-gray-light-700">ناهار</h3>
            <p className="text-sm text-gray-light-600">چهارشنبه ۱۹ آذر</p>
          </div>
        </div>
        <hr className="border-rborder-primary" />
        <div className="flex items-center gap-md p-3xl">
          <SearchInput
            placeholder="جستجو کنید..."
            className="w-[300px] px-10"
            onSearch={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          <div className="mt-1 w-full">
            <Dropdown
              value={filter}
              onChange={setFilter}
              options={[
                { label: 'همه', value: 'all' },
                { label: 'فعال', value: 'active' },
                { label: 'غیرفعال', value: 'inactive' },
              ]}
            />
          </div>
        </div>
        <OrderList
          orders={orders}
          selectedOrder={selectedOrder}
          onSelect={(id: number) => setSelectedOrder(id)}
        />
      </div>
      <div className="col-span-8">
        {selectedOrder ? (
          <OrderDetailsPanel
            data={data}
            mealsTableColumns={mealsTableColumns}
            logs={logs}
          />
        ) : (
          <OrderEmptyState />
        )}
      </div>
    </div>
  );
}