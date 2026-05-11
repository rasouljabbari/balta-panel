import Table from '@/components/shared/table';
import type { DriverItem, DriverTableProps } from '../types';
import { driverTableColumns } from './table-columns';
import DriverTableHeader from './table-headers';

export default function DriverTable({
  data,
  meta,
  onAllocatedOrders,
  onPageChange,
  onSearch,
  searchValue,
  isLoading
}: DriverTableProps) {
  return (
    <Table<DriverItem>
      columns={driverTableColumns(onAllocatedOrders)}
      data={data}
      rowKey={(row) => row.id}
      header={<DriverTableHeader
        searchValue={searchValue}
        onSearch={onSearch}
        count={meta?.total ?? data.length} />}
      pagination={{
        currentPage: meta?.current_page ?? 1,
        totalPages: meta?.last_page ?? 1,
        onPageChange: onPageChange,
      }}
      loading={isLoading}
    />
  );
}
