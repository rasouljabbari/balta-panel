import SharedModal from '@/components/shared/custom-modal';
import { SquarePen } from 'lucide-react';
import { useState } from 'react';
import { Switch, TooltipWrapper } from 'rg-dst';
import type { DefinitionItemListProps, Item } from '../type';


export default function DefinitionItemList({
  items,
  onEdit,
  onToggle,
  title,
  isPending,
  statusModalOpen,
  setStatusModalOpen,
  changeStatusDirectly
}: DefinitionItemListProps & { title?: string }) {
  const [selectedItemForStatus, setSelectedItemForStatus] =
    useState<Item | null>(null);

  const handleToggleClick = (item: Item) => {
    setSelectedItemForStatus(item);
    if (item?.is_active) {
      setStatusModalOpen(true);
    } else {
      changeStatusDirectly(item.id)
    }

  };

  return (
    <>
      <ul className="flex flex-col gap-xl max-h-[650px] overflow-y-auto">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border border-gray-light-200 rounded-md px-xl py-lg"
          >
            {/* Switch + Title */}
            <div className="flex items-start gap-lg">
              <Switch
                disabled={isPending}
                checked={item.is_active}
                onToggle={() => handleToggleClick(item)}
                className="data-[state=checked]:bg-utility-brand-600"
              />
              <div className='flex flex-col gap-xxs'>
                <span className="font-medium text-gray-light-700">
                  {item.name}
                </span>

                {/* Optional Fields */}
                {item.price !== undefined && (
                  <span className="text-sm text-gray-light-600">
                    قیمت: {item.price.toLocaleString('fa-IR')} تومان
                  </span>
                )}

                {item.order_limit_translation && (
                  <span className="text-sm text-gray-light-600">
                    تنوع‌غذایی: {item.order_limit_translation}
                  </span>
                )}

                {item.default_packaging && (
                  <span className="text-sm text-gray-light-600">
                    بسته‌بندی: {item.default_packaging.name}
                  </span>
                )}
              </div>
            </div>

            <TooltipWrapper content="ویرایش" position='top'>
              <button
                onClick={() => onEdit(item)}
                className="p-md rounded-md hover:bg-gray-light-50 transition-colors"
              >
                <SquarePen size={20} />
              </button>
            </TooltipWrapper>
          </li>
        ))}
      </ul>

      <SharedModal
        isOpen={statusModalOpen}
        onClose={() => setStatusModalOpen(false)}
        title={`تغییر وضعیت ${title ?? ''}`}
        confirmText="تغییر وضعیت"
        confirmButtonType="button"
        onConfirm={() =>
          selectedItemForStatus && onToggle(selectedItemForStatus)
        }
        confirmButtonWidth=""
        isPending={isPending}
      >
        <p className="text-gray-light-600">
          با غیرفعال کردن این مورد، آیتم‌های مربوطه در لیست سفارش مشتریان نمایش
          داده نخواهند شد.
        </p>
      </SharedModal>
    </>
  );
}