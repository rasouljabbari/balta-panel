import { Switch } from 'rg-dst';
import type { ToggleItemListProps, ToggleListItemBase  } from '@/components/shared/type';

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
