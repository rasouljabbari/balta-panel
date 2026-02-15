import Image from '@/components/shared/image';
import type { TableColumn } from '@/components/shared/type';
import { Badge, SquarePen } from 'lucide-react';
import type { FoodItem, MealType } from '../type';


export const fakeFoods: FoodItem[] = [
  {
    id: 1,
    name: 'لوبیاپلو',
    price: 180000,
    category: 'فست فود',
    image: '/assets/images/fake-image/food.png',
    mealTypes: ['صبحانه'],
    menuType: 'سازمانی',
    description:
      'گوشت چرخ کرده گوساله و گوسفندی • پیاز رنده شده، جعفری خرد شده • ادویه کباب کوبیده، زعفران • نان لواش تازه.',
    status: 'فعال',
  },
  {
    id: 2,
    name: 'برگر کلاسیک',
    price: 150000,
    category: 'فست فود',
    image: '/assets/images/fake-image/food.png',
    mealTypes: ['نهار', 'شام'],
    menuType: 'اقتصادی',
    description:
      'گوشت چرخ کرده گوساله و گوسفندی • پیاز رنده شده، جعفری خرد شده • ادویه کباب کوبیده، زعفران • نان لواش تازه.',
    status: 'غیرفعال',
  },
];

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
    render: (value) => `${value.toLocaleString()} تومان`,
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
    render: () => <SquarePen size={20} color="var(--color-gray-light-700)" />,
  },
];
export const fakeOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const meal = [
  {
    value: 1,
    label: 'صبحانه'
  },
  {
    value: 2,
    label: 'ناهار'
  },
  {
    value: 3,
    label: 'شام'
  },
  {
    value: 4,
    label: 'عصرانه'
  },
  {
    value: 5,
    label: 'سحری'
  }
]


export const weekDays = [
  'شنبه',
  'یک‌شنبه',
  'دوشنبه',
  'سه‌شنبه',
  'چهارشنبه',
  'پنج‌شنبه',
  'جمعه',
];