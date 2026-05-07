import { FileText, Funnel } from 'lucide-react';
import { Button } from 'rg-dst';
import { DownloadButton } from '@/components/shared/download-button';
import Table from '@/components/shared/table';
import type { ContractsTableCardProps } from '../type';
import { contractTableColumns } from './table-columns';


export default function ContractsTableCard({
  data,
  onEdit,
  onOpenFilter,
  pagination,
  isLoading
}: ContractsTableCardProps) {
  return (
    <Table
      pagination={pagination}
      columns={contractTableColumns(onEdit)}
      data={data}
      loading={isLoading}
      rowKey={(row) => row.id}
      header={
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-xl">
            <div className="flex items-center justify-center border w-10 h-10 rounded-lg border-gray-light-200">
              <FileText size={20} color="var(--color-gray-light-500)" />
            </div>
            <h2 className="text-lg font-semibold text-gray-light-900">
              لیست قراردادها
            </h2>
          </div>

          <div className="flex items-center gap-lg">
            <Button
              onClick={onOpenFilter}
              variant="secondaryGray"
              leftIcon={
                <Funnel size={20} color="var(--color-gray-light-700)" />
              }
            >
              فیلترها
            </Button>

            <DownloadButton
              url="/api/contracts/export"
              fileName="contracts.xlsx"
            />
          </div>
        </div>
      }
    />
  );
}