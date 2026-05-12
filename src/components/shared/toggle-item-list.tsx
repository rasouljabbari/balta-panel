import { Switch } from 'rg-dst';
import type { ReactNode } from 'react';

type ToggleListItemBase = {
  id: number;
  name: string;
  is_active: boolean;
};

type ToggleItemListProps<T extends ToggleListItemBase> = {
  items: T[];
  isPending: boolean;
  onToggle: (item: T) => void;
  renderMeta?: (item: T) => ReactNode;
  renderBadges?: (item: T) => ReactNode;
  rightAction?: (item: T) => ReactNode;
  topSlot?: ReactNode;
};

export default function ToggleItemList<T extends ToggleListItemBase>({
  items,
  isPending,
  onToggle,
  renderMeta,
  renderBadges,
  rightAction,
  topSlot,
}: ToggleItemListProps<T>) {
  return (
    <>
      {topSlot}
      <ul className="flex flex-col gap-xl max-h-[650px] overflow-y-auto">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border border-gray-light-200 rounded-md px-xl py-lg"
          >
            <div className="flex items-start gap-lg">
              <Switch
                disabled={isPending}
                checked={item.is_active}
                onToggle={() => onToggle(item)}
                className="data-[state=checked]:bg-utility-brand-600"
              />
              <div className="flex flex-col gap-xxs">
                <div className="flex items-center gap-md">
                  <span className="font-medium text-gray-light-700">{item.name}</span>
                  {renderBadges?.(item)}
                </div>
                {renderMeta?.(item)}
              </div>
            </div>
            {rightAction?.(item)}
          </li>
        ))}
      </ul>
    </>
  );
}
