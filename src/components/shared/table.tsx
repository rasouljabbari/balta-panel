import type { ReactNode } from 'react';
import { Pagination } from 'rg-dst';
import type { TableColumn, TableProps } from './type';


interface ExtendedTableProps<T> extends TableProps<T> {
  header?: ReactNode;
}

export default function Table<T = any>({
  columns,
  data,
  pagination,
  rowKey = (_, index) => index,
  summaryRow,
  header,
}: ExtendedTableProps<T>) {
  const getCellValue = (column: TableColumn<T>, row: T, index: number) => {
    if (column.render) {
      const value = column.accessor
        ? column.accessor(row)
        : (row as any)[column.id];
      return column.render(value, row, index);
    }

    const value = column.accessor
      ? column.accessor(row)
      : (row as any)[column.id];
    return value ?? '-';
  };

  return (
    <div className="border border-gray-light-200 rounded-xl overflow-hidden bg-white">
      {/* Custom Header */}
      {header && (
        <div className="px-3xl py-xl border-b border-gray-light-200">
          {header}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-light-200">
              {columns.map((column) => (
                <th
                  key={column.id}
                  className="text-start text-xs font-normal text-rtext-tertiary-600 px-3xl py-lg bg-gray-light-50 whitespace-nowrap"
                  style={
                    column.width
                      ? { width: column.width, minWidth: column.width }
                      : undefined
                  }
                >
                  <div className="flex items-center gap-2">
                    <span>{column.label}</span>
                    {column.icon && (
                      <span
                        className="flex-shrink-0"
                        dangerouslySetInnerHTML={{ __html: column.icon }}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {summaryRow && summaryRow}

            {data.map((row, index) => (
              <tr
                key={rowKey(row, index)}
                className="border-b border-gray-light-200 last:border-b-0"
              >
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className="px-3xl py-xl text-sm text-rtext-primary-900 whitespace-nowrap"
                    style={
                      column.width
                        ? { width: column.width, minWidth: column.width }
                        : undefined
                    }
                  >
                    {getCellValue(column, row, index)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="px-3xl py-lg border-t border-gray-light-200">
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={pagination.onPageChange}
            showFirstLast={false}
            activeClassName="bg-gray-light-50 border-none"
            nextClassName="border border-gray-light-300 rounded-md"
            previousClassName="border border-gray-light-300 rounded-md"
          />
        </div>
      )}
    </div>
  );
}

export type { SortDirection, TableColumn } from '@/components/shared/type';