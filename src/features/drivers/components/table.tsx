import Table from '@/components/shared/table';
import type { DriverItem, DriverTableProps } from '../types';
import { driverTableColumns } from './table-columns';
import DriverTableHeader from './table-headers';


export default function DriverTable({ data, onAllocatedOrders }: DriverTableProps) {
  return (
    <Table<DriverItem>
      columns={driverTableColumns(onAllocatedOrders)}
      data={data}
      rowKey={(row) => row.id}
      header={<DriverTableHeader />}
      pagination={{
        currentPage: 1,
        totalPages: 1,
        onPageChange: () => {},
      }}
    />
  );
}