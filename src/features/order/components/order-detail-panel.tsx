import { CircleAlert } from 'lucide-react';
import { LogIcon } from '@/components/icons/order-icons';
import { Card, CardHeader } from '@/components/shared/card';
import Table from '@/components/shared/table';
import MealsTableHeader from './meals-table-header';
import OrderDetailsHeader from './order-detail-header';
import type { DetailPanelProps } from '../types';


export default function OrderDetailsPanel({
  data,
  mealsTableColumns,
  logs,
}: DetailPanelProps) {
  return (
    <>
      <OrderDetailsHeader
        title="راهکارگستران"
        branch="آبرسان"
        infos={[
          { label: 'بسته‌بندی', value: 'آلومینیومی' },
          { label: 'ساعت تحویل', value: '۱۴:۰۰' },
        ]}
      />

      <div className="p-3xl grid grid-cols-8 gap-3xl">
        {/* TABLE */}
        <div className="col-span-8">
          <Table
            header={<MealsTableHeader />}
            columns={mealsTableColumns}
            data={data}
          />
        </div>

        {/* DESCRIPTION */}
        <Card className="col-span-4 max-h-[152px]">
          <CardHeader>
            <div className="flex items-center gap-xl">
              <div className="p-[10px] flex items-center justify-center">
                <CircleAlert size={20} color="#667085" />
              </div>

              <h4 className="text-lg font-semibold text-rtext-primary-900">
                توضیحات سفارش
              </h4>
            </div>
          </CardHeader>

          <p className="text-sm text-gray-light-700 p-3xl">
            لطفا ۱۰ پرس از چلو کوبیده ها گوجه نداشته باشن
          </p>
        </Card>

        {/* LOGS */}
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex items-center gap-xl">
              <div className="p-[10px] flex items-center justify-center">
                <LogIcon />
              </div>

              <h4 className="text-lg font-semibold text-rtext-primary-900">
                لاگ‌های سفارش
              </h4>
            </div>
          </CardHeader>

          <div className="flex items-start gap-lg p-3xl">
            {/* timeline dots */}
            <div className="flex flex-col items-center">
              {logs.map((log: any, index: number) => (
                <div key={log.id} className="flex flex-col items-center">
                  <div className="border border-gray-light-200 rounded-full w-4xl h-4xl p-2 flex items-center justify-center">
                    <div className="bg-gray-light-300 w-lg h-lg rounded-full" />
                  </div>

                  {index !== logs.length - 1 && (
                    <div className="w-px h-[34px] bg-gray-light-200" />
                  )}
                </div>
              ))}
            </div>

            {/* content */}
            <div className="flex flex-col gap-xl">
              {logs.map((log: any) => (
                <div key={log.id}>
                  <h4 className="text-sm font-semibold text-gray-light-700">
                    {log.title}
                  </h4>
                  <p className="text-sm text-gray-light-600">
                    {log.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}