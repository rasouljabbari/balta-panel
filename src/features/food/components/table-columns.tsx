import { SquarePen } from 'lucide-react';
import { Badge } from 'rg-dst';
import Image from '@/components/shared/image';
import type { TableColumn } from '@/components/shared/table';
import type { FoodItem, MealType } from '../type';


export const foodTableColumns = (
  onEdit: (row: FoodItem) => void,
): TableColumn<FoodItem>[] => [
  {
    id: 'id',
    label: 'شماره آیتم',
    accessor: (row) => row.id,
  },
  {
    id: 'image',
    label: 'عکس محصول',
    accessor: (row) => row.image,
    render: (value, row) => (
      <div className="w-16 h-16">
        <Image
          src={value}
          alt={row.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    id: 'name',
    label: 'نام غذا',
    accessor: (row) => row.name,
  },
  {
    id: 'mealTypes',
    label: 'وعده‌ها',
    accessor: (row) => row.mealTypes,
    render: (value: MealType[]) => (
      <div className="flex items-center gap-xs flex-wrap">
        {value.map((meal) => (
          <Badge key={meal} color="gray">
            {meal}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    id: 'price',
    label: 'قیمت',
    accessor: (row) => row.price,
    render: (value: number) => `${value.toLocaleString()} تومان`,
  },
  {
    id: 'menuType',
    label: 'نوع منو',
    accessor: (row) => row.menuType,
  },
  {
    id: 'category',
    label: 'دسته بندی',
    accessor: (row) => row.category,
  },
  {
    id: 'description',
    label: 'توضیحات',
    accessor: (row) => row.description,
    width: '113px',
    render: (value: string) => (
      <div
        className="max-w-[113px] overflow-hidden text-ellipsis whitespace-nowrap"
        title={value}
      >
        {value}
      </div>
    ),
  },
  {
    id: 'status',
    label: 'وضعیت نمایش',
    accessor: (row) => row.status,
    render: (value: FoodItem['status']) => (
      <Badge color={value === 'فعال' ? 'success' : 'error'}>{value}</Badge>
    ),
  },
  {
    id: 'actions',
    label: '',
    render: (_, row) => (
      <SquarePen
        size={20}
        className="cursor-pointer text-gray-light-700 hover:text-primary-600 transition-colors"
        onClick={() => onEdit(row)}
      />
    ),
  },
];