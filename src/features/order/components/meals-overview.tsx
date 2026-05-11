import { useState } from 'react';
import { ArrowRight, Clock9 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FoodIcon, IdIcon, PackageIcon } from '@/components/icons/order-icons';
import Dropdown from '@/components/shared/drop-down';
import Image from '@/components/shared/image';
import OrderCard from '@/components/shared/order-card';
import SearchInput from '@/components/shared/search-input';
import OrderDetailsHeader from './order-detail-header';


export default function MealsOverview() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(false);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 bg-white border-l border-rborder-primary h-screen">
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
        <div className="p-3xl">
          <OrderCard
            selected={selectedOrder}
            onClick={() => setSelectedOrder(true)}
            title="آذرآبادگان نوین صنعت برادران"
            badges={[
              {
                label: 'شعبه ۱ آبرسان',
                color: 'gray',
              },
              {
                label: 'تحویل به راننده',
                color: 'blue',
              },
            ]}
          >
            <div className="flex items-center gap-3xl">
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-md">
                  <IdIcon />

                  <p className="text-sm text-gray-light-600">شماره سفارش</p>
                </div>

                <p className="text-sm font-semibold text-gray-light-700">
                  #۲۴۴۸
                </p>
              </div>

              <div className="h-5 w-px bg-gray-light-300" />

              <div className="flex w-full justify-between">
                <div className="flex items-center gap-md">
                  <Clock9 size={20} color="#667085" />

                  <p className="text-sm text-gray-light-600">ساعت تحویل</p>
                </div>

                <p className="text-sm font-semibold text-gray-light-700">
                  ۱۴:۰۰
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3xl">
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-md">
                  <FoodIcon />

                  <p className="text-sm text-gray-light-600">تعداد غذا</p>
                </div>

                <p className="text-sm font-semibold text-gray-light-700">
                  ۴۰ پرس
                </p>
              </div>

              <div className="h-5 w-px bg-gray-light-300" />

              <div className="flex w-full justify-between">
                <div className="flex items-center gap-md">
                  <PackageIcon />

                  <p className="text-sm text-gray-light-600">بسته‌بندی</p>
                </div>

                <p className="text-sm font-semibold text-gray-light-700">
                  آلومینیوم
                </p>
              </div>
            </div>
          </OrderCard>
        </div>
      </div>
      <div className="col-span-8 ">
        {selectedOrder ? (
          <>
            <OrderDetailsHeader
              title="راهکارگستران"
              branch="آبرسان"
              infos={[
                {
                  label: 'بسته‌بندی',
                  value: 'آلومینیومی',
                },
                {
                  label: 'ساعت تحویل',
                  value: '۱۴:۰۰',
                },
              ]}
            />

            <div>test</div>
          </>
        ) : (
          <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-3xl">
              <Image
                src="/assets/images/Empty-meal.webp"
                alt="Empty-meal"
                width={110}
                height={110}
              />

              <div className="flex flex-col gap-md text-center">
                <p className="text-xl font-medium text-gray-light-700">
                  برای نمایش اطلاعات سفارش یک سفارش را انتخاب کنید
                </p>

                <p className="text-md text-gray-light-500">
                  میتوانید از طریق سایدبار سمت راست یکی از سفارش‌ها را انتخاب
                  کنید
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}