import { FoodIcons } from '@/components/icons/food-icons';
import { Card, CardBody, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';
import Table from '@/components/shared/table';
import type { FoodItem, FoodTableProps } from '../type';
import { foodTableColumns } from './table-columns';
import FoodTableHeader from './table-header';
import { Skeleton } from '@/components/shared/skeleton-loader';


export default function FoodTable({ isLoading, data, onAdd, onEdit, onSearch, meta, onPageChange }: FoodTableProps) {
  
  if (!data || data.length === 0 || isLoading) {
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
          {isLoading ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <Skeleton
                key={idx}
                className="w-full h-[50px] mb-3"
                rounded="md"
              />
            ))
          ) : (
            <EmptyBox
              image="/assets/images/empty-food.webp"
              title="در حال حاضر آیتمی برای نمایش وجود ندارد."
              buttonText="افزودن آیتم"
              onButtonClick={onAdd}
            />
          )}
        </CardBody>
      </Card>
    );
  }
  return (
    <Table<FoodItem>
      columns={foodTableColumns(onEdit)}
      data={data}
      rowKey={(row) => row.id}
      header={<FoodTableHeader onSearch={onSearch} onAdd={onAdd} />}
      pagination={meta ? {
        currentPage: meta.current_page,
        totalPages: meta.last_page,
        onPageChange,
      } : undefined}
    />
  );
}