import Table from '@/components/shared/table';
import type { FoodItem, FoodTableProps } from '../type';
import { foodTableColumns } from './table-columns';
import FoodTableHeader from './table-header';


export default function FoodTable({ data, onAdd, onEdit }: FoodTableProps) {
  return (
    <Table<FoodItem>
      columns={foodTableColumns(onEdit)}
      data={data}
      rowKey={(row) => row.id}
      header={<FoodTableHeader onAdd={onAdd} />}
      pagination={{
        currentPage: 1,
        totalPages: 1,
        onPageChange: () => {},
      }}
    />
  );
}