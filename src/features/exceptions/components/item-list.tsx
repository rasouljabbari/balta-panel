import SharedModal from '@/components/shared/custom-modal';
import { useState } from 'react';
import { Switch, Badge } from 'rg-dst';
import type { DefinitionItemListProps, Item } from '../type';


export default function DefinitionItemList({
  items,
  onToggle,
  title,
  isPending,
  changeStatusDirectly
}: DefinitionItemListProps & { title?: string }) {
  const [selectedItemForStatus, setSelectedItemForStatus] =
    useState<Item | null>(null);

  const handleToggleClick = (item: Item) => {
    setSelectedItemForStatus(item);
      changeStatusDirectly(item.id)
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
                <div className="flex items-center gap-md">
                  <span className="font-medium text-gray-light-700 pl-2">
                    {item.name}
                  </span>

                  <Badge color='gray'>
                    {item.category}
                  </Badge>

                  {item?.is_daily &&
                    <Badge color='orange'>
                      غذای روز
                    </Badge>
                  }
                </div>

                {item.code && (
                  <span className="text-sm text-gray-light-600">
                   کد: #{item.code}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <SharedModal
        isOpen={false}
        onClose={() => console.log('closed')}
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