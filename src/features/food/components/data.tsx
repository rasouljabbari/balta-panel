import Image from '@/components/shared/image';
import type { TableColumn } from '@/components/shared/type';
import { Badge, SquarePen } from 'lucide-react';
import type { FoodItem, MealType, Menu, Category } from '../type';

export const columns: TableColumn<FoodItem>[] = [
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
    accessor: (row) => row.meal_types,
    render: (value: MealType[]) => (
      <div className="flex items-center gap-xs flex-wrap">
        {value.map((meal: MealType) => (
          <Badge key={meal.id} color="gray">
            {meal.name}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    id: 'price',
    label: 'قیمت',
    accessor: (row) => row.price,
    render: (value) => `${Number(value).toLocaleString()} تومان`,
  },
  {
    id: 'menuType',
    label: 'نوع منو',
    accessor: (row) => row.menus,
    render: (value: Menu[]) => (
      <div className="flex items-center gap-xs flex-wrap">
        {value?.map((menu: Menu) => (
          <span key={menu.id}>{menu.name}</span>
        ))}
      </div>
    ),
  },
  {
    id: 'category',
    label: 'دسته بندی',
    accessor: (row) => row.category,
    render: (value: Category) => (
      <div className="flex items-center gap-xs flex-wrap">
        <span>{value?.name}</span>
      </div>
    ),
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
    accessor: (row) => row.is_active,
    render: (value: boolean) => (
      <Badge color={value ? 'success' : 'error'}>{value ? 'فعال' : 'غیرفعال'}</Badge>
    ),
  },
  {
    id: 'actions',
    label: '',
    render: () => <SquarePen size={20} color="var(--color-gray-light-700)" />,
  },
];

