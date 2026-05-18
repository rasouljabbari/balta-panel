import ToggleItemList from '@/components/shared/toggle-item-list';
import { useState } from 'react';
import { Badge } from 'dst-rg';
import type { ExceptionItemListProps, Item } from '../type';
import SearchInput from '@/components/shared/search-input';

export default function ExceptionItemList({
  items,
  isPending,
  onToggleClick,
}: ExceptionItemListProps & { title?: string }) {
  const [searchValue, setSearchValue] = useState('');

  const handleToggleClick = (item: Item) => {
    onToggleClick(item);
  };

  const filteredItems = items.filter((item) => {
    const normalizedSearch = searchValue.trim();
    if (!normalizedSearch) return true;

    return (
      item.name.includes(normalizedSearch) ||
      item.category.includes(normalizedSearch) ||
      String(item.code ?? '').includes(normalizedSearch)
    );
  });

  return (
    <>
      <ToggleItemList
        items={filteredItems}
        isPending={isPending}
        onToggle={handleToggleClick}
        topSlot={(
          <SearchInput
            searchValue={searchValue}
            onSearch={setSearchValue}
            placeholder="جستجو کنید..."
            inputClassName="w-full mb-xl"
          />
        )}
        renderBadges={(item) => (
          <div className="flex items-center gap-md">
            <Badge color='gray'>{item.category}</Badge>
            {item?.is_daily && <Badge color='orange'>غذای روز</Badge>}
          </div>
        )}
        renderMeta={(item) => (
          <>
            {item.code != null && item.code !== 0 && (
              <span className="text-sm text-gray-light-600">کد: #{item.code}</span>
            )}
          </>
        )}
      />
    </>
  );
}
