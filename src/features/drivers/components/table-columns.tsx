import { Badge, TooltipWrapper } from 'rg-dst';
import type { TableColumn } from '@/components/shared/table';
import type { DriverItem } from '../types';
import { Eye } from 'lucide-react';


export const driverTableColumns = (
  onAllocatedOrders: (row: DriverItem) => void,
): TableColumn<DriverItem>[] => [
  {
    id: 'id',
    label: 'کد راننده',
    accessor: (row) => row.id,
  },
  {
    id: 'fullName',
    label: 'نام راننده',
    accessor: (row) => row.fullName,
  },
  {
    id: 'vehicleType',
    label: 'نوع خودرو',
    accessor: (row) => row.vehicleType,
  },
  {
    id: 'plate',
    label: 'پلاک خودرو',
    accessor: (row) => row.plate,
  },
  {
    id: 'phone',
    label: 'شماره تماس',
    accessor: (row) => row.phone,
  },
  {
    id: 'status',
    label: 'وضعیت حساب',
    accessor: (row) => row.status,
    render: (value: DriverItem['status']) => (
      <Badge color={value === 'active' ? 'success' : 'error'}>
        {value === 'active' ? 'فعال' : 'غیرفعال'}
      </Badge>
    ),
  },
  {
    id: 'actions',
    label: '',
    render: (_, row) => (
      <TooltipWrapper
        content="مشاهده اطلاعات راننده"
        position="top"
        contentClassName="text-xs font-semibold"
      >
        <button onClick={() => onAllocatedOrders(row)} className="!p-2">
          <Eye size={18} />
        </button>
      </TooltipWrapper>
    ),
  },
];