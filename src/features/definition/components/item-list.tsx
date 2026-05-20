import SharedModal from '@/components/shared/custom-modal';
import ToggleItemList from '@/components/shared/toggle-item-list';
import { SquarePen } from 'lucide-react';
import { useState } from 'react';
import { Button, TooltipWrapper } from 'dst-rg';
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
      <ToggleItemList
        items={items}
        isPending={isPending}
        onToggle={handleToggleClick}
        renderMeta={(item) => (
          <>
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
          </>
        )}
        rightAction={(item) => (
          <TooltipWrapper content="ویرایش" position='top'>
            <Button
              variant='tertiaryGray'
              onClick={() => onEdit(item)}
              className="p-md rounded-md hover:bg-gray-light-50 transition-colors"
              aria-label='edit-button'
            >
              <SquarePen size={20} />
            </Button>
          </TooltipWrapper>
        )}
      />

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