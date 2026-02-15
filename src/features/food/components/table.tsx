import { useState } from 'react';
import { CirclePlus, Funnel, Search } from 'lucide-react';
import {  Button, Input } from 'rg-dst';
import { FoodIcons } from '@/components/icons/food-icons';
import { Card, CardBody, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';
import Table  from '@/components/shared/table';
import type { FoodItem, } from '../type';
import { columns, fakeFoods } from './data';



export default function TableFood() {
  const [foods] = useState<FoodItem[]>(fakeFoods);

  if (foods.length === 0) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-xl">
            <div className="border border-gray-light-200 p-3 shadow-xs rounded-lg">
              <FoodIcons />
            </div>
            <h2 className="text-lg font-semibold text-gray-light-900">
              لیست غذاها
            </h2>
          </div>
        </CardHeader>

        <CardBody className="py-4xl">
          <EmptyBox
            image="/assets/images/empty-food.webp"
            title="در حال حاضر آیتمی برای نمایش وجود ندارد."
            buttonText="افزودن آیتم"
            onButtonClick={() => {
              console.log('add food clicked');
            }}
          />
        </CardBody>
      </Card>
    );
  }
  return (
    <>
      <Table<FoodItem>
        columns={columns}
        data={foods}
        rowKey={(row) => row.id}
        header={
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-xl">
              <div className="border border-gray-light-200 p-3 shadow-xs rounded-lg">
                <FoodIcons />
              </div>
              <h2 className="text-lg font-semibold text-gray-light-900">
                لیست غذاها
              </h2>
            </div>

            <div className="flex items-center gap-lg">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="جستجو در آیتم‌ها"
                  className="h-10 pr-10 placeholder:text-sm placeholder:text-gray-light-500"
                />
                <Search
                  size={20}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-light-500"
                />
              </div>

              <Button
                variant="linkColor"
                className="h-10 px-4! flex items-center justify-center"
                leftIcon={<CirclePlus size={20} />}
                onClick={() => console.log('add food')}
              >
                افزودن آیتم
              </Button>

              <Button
                variant="secondaryGray"
                className="h-11 flex items-center justify-center"
                leftIcon={<Funnel size={20} />}
              >
                فیلترها
              </Button>
            </div>
          </div>
        }
        pagination={{
          currentPage: 1,
          totalPages: 1,
          onPageChange: () => {},
        }}
      />
    </>
  );
}