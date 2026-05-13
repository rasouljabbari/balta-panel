import { Badge } from 'rg-dst';
import type { TableColumn } from '@/components/shared/table';
import type { MealItem } from '../types';


export const mealsTableColumns: TableColumn<MealItem>[] = [
  {
    id: 'id',
    label: 'شماره آیتم',
    accessor: (row) => row.id,
    render: (_, row) =>
      row.isTotal ? (
        <span className="font-semibold text-gray-light-900">مجموع</span>
      ) : (
        row.id
      ),
  },

  {
    id: 'name',
    label: 'نام آیتم',
    accessor: (row) => row.name,
    render: (value, row) => (row.isTotal ? '' : value),
  },

  {
    id: 'menuType',
    label: 'نوع منو',
    accessor: (row) => row.menuType,
    render: (value: string, row) =>
      row.isTotal ? null : <Badge color="gray">{value}</Badge>,
  },

  {
    id: 'count',
    label: 'تعداد',
    accessor: (row) => row.count,
    render: (value: number) => <span className="font-medium">{value} پرس</span>,
  },

  {
    id: 'price',
    label: 'قیمت',
    accessor: (row) => row.price,
    render: (value: number) => (
      <span className="font-medium text-gray-light-900">
        {value.toLocaleString()} تومان
      </span>
    ),
  },
];
