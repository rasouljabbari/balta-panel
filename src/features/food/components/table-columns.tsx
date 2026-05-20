import Image from '@/components/shared/image';
import type { TableColumn } from '@/components/shared/table';
import { formatPrice } from '@/utils/formatPrice';
import { Badge } from 'dst-rg';
import { SquarePen } from 'lucide-react';
import type { Category, FoodItem, MealType, Menu } from '../type';


export const foodTableColumns = (
  onEdit: (row: FoodItem) => void,
  currentPage: number = 1,
  perPage: number = 10,
): TableColumn<FoodItem>[] => [
    {
      id: 'id',
      label: 'شماره آیتم',
      render: (_value, _row, index) => `#${(currentPage - 1) * perPage + index + 1}`,
      width: '80px',
    },
    {
      id: 'image',
      label: 'عکس محصول',
      accessor: (row) => row.image,
      render: (value, row) => (
        <Image
          src={value || '/assets/images/food-fallback-img.webp'}
          alt={row.name}
          className="w-20 h-20 object-cover rounded-md m-auto"
        />
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
          {value?.map((meal: MealType) => (
            <Badge color="gray">
              {meal.name}
            </Badge>
          ))}
        </div>
      ),
      width: '200px',
    },
    {
      id: 'price',
      label: 'قیمت',
      accessor: (row) => row.price,
      render: (value: number) => `${formatPrice(value)} تومان`,
    },
    {
      id: 'menuType',
      label: 'نوع منو',
      accessor: (row) => row.menus,
      render: (value: Menu[]) => (
        <div className="flex items-center gap-xs flex-wrap">
          {value?.map((menu: Menu) => (
            menu.name
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
          {value?.name}
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
          {value?.length > 0 ? value : '-'}
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
      render: (_, row) => (
        <SquarePen
          size={20}
          className="cursor-pointer text-gray-light-700 hover:text-primary-600 transition-colors"
          onClick={() => onEdit(row)}
        />
      ),
    },
  ];