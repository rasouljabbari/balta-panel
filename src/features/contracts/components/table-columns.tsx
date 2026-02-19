import { Settings } from 'lucide-react';
import { Badge, TooltipWrapper } from 'rg-dst';
import { ContactCalenderIcon } from '@/components/icons/contract-icon';
import type { TableColumn } from '@/components/shared/table';
import type { ContractItem, MealType } from '../type';


export const contractTableColumns = (
  onEdit: (row: ContractItem) => void,
): TableColumn<ContractItem>[] => [
  {
    id: 'name',
    label: 'نام مشتری',
    accessor: (row) => row.name,
  },
  {
    id: 'branches',
    label: 'شعبه',
    accessor: (row) => row.branches,
  },
  {
    id: 'representative',
    label: 'نماینده',
    accessor: (row) => row.representative,
  },
  {
    id: 'representative_number',
    label: 'شماره تماس نماینده',
    accessor: (row) => row.representative_number,
  },
  {
    id: 'meals',
    label: 'وعده‌ها',
    accessor: (row) => row.meals,
    render: (value: MealType[]) => (
      <div className="flex items-center gap-xs flex-wrap">
        {value.map((meal) => (
          <Badge key={meal} color={meal === 'ثبت نشده' ? 'error' : 'gray'}>
            {meal}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    id: 'status',
    label: 'وضعیت',
    accessor: (row) => row.status,
    render: (value: ContractItem['status']) => (
      <Badge color={value === 'فعال' ? 'success' : 'error'}>{value}</Badge>
    ),
  },
  {
    id: 'actions',
    label: '',
    render: (_, row) => (
      <div className="flex items-center gap-3xl">
        <TooltipWrapper
          content="برنامه هفتگی"
          position="top"
          contentClassName="text-xs font-semibold"
        >
          <button
            type="button"
            className="p-md rounded-md hover:bg-gray-light-50 transition-colors cursor-pointer"
          >
            <ContactCalenderIcon />
          </button>
        </TooltipWrapper>

        <TooltipWrapper
          content="تنظیمات"
          position="top"
          contentClassName="text-xs font-semibold"
        >
          <button
            type="button"
            onClick={() => onEdit(row)}
            className="p-md rounded-md hover:bg-gray-light-50 transition-colors cursor-pointer"
          >
            <Settings size={20} color="var(--color-gray-light-700)" />
          </button>
        </TooltipWrapper>
      </div>
    ),
  },
];