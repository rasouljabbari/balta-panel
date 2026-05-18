import type { BadgeColor, BadgeProps, BadgeUIColor } from '@/features/order/types';
import { cn } from '@/utils/cn';
import { Badge } from 'dst-rg';


const badgeColorMap: Record<BadgeColor, BadgeUIColor> = {
  gray: 'gray',
  blue: 'blue',
  green: 'success',
  red: 'error',
  orange: 'orange',
};

/* ---------------- component ---------------- */

export default function OrderCard({
  title,
  badges = [],
  children,
  selected,
  onClick,
}: BadgeProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'overflow-auto rounded-xl border cursor-pointer transition-all',
        selected
          ? 'border-gray-light-900'
          : 'border-gray-light-200 hover:border-gray-light-400',
      )}
    >
      <div className="bg-gray-light-50">
        {/* Header */}
        <div className="flex items-center gap-lg px-3xl py-lg">
          <h3 className="text-lg font-semibold text-gray-light-900">{title}</h3>

          {badges.length > 0 && (
            <>
              <div className="h-5 w-px bg-gray-light-300" />

              <div className="flex items-center gap-md">
                {badges.map((badge, index) => (
                  <Badge
                    key={`${badge.label}-${index}`}
                    color={badgeColorMap[badge.color]}
                  >
                    <span className="whitespace-nowrap">{badge.label}</span>
                  </Badge>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col gap-xl border-t border-gray-light-200 bg-white p-3xl">
          {children}
        </div>
      </div>
    </div>
  );
}