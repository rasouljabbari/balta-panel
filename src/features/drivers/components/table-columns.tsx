import type { TableColumn } from '@/components/shared/table';
import { plateText } from '@/utils/plate-text';
import { Badge, TooltipWrapper } from 'dst-rg';
import { Eye } from 'lucide-react';
import type { DriverItem } from '../types';

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
      id: 'car_type',
      label: 'نوع خودرو',
      accessor: (row) => row.car_type,
    },
    {
      id: 'plate',
      label: 'پلاک خودرو',
      accessor: (row) => row.car_plate ? <span>{plateText(row.car_plate)}</span> : null,
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