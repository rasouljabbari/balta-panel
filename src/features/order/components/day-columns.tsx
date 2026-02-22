import OrderItem from "@/features/order/components/order-item";
import type { DayItem } from "@/features/order/types";
import { cn } from "@/utils/cn";

export default function DayColumn({
  day,
}: {
  day: DayItem;
  isCurrentWeek: boolean;
}) {
  return (
    <div className="p-lg flex flex-col gap-lg border-r border-gray-light-200 hover:bg-gray-light-50">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "text-lg font-semibold",
              day.isToday ? "text-utility-brand-600" : "text-gray-light-700"
            )}
          >
            {day.dayName}
          </span>

          <span className="text-sm text-gray-light-500">{day.fullDate}</span>
        </div>

      <hr
        className={cn(
          "-mx-lg",
          day.isToday ? "border-utility-brand-600" : "border-gray-light-200"
        )}
      />

      <div className="mt-md flex-1 flex flex-col gap-xs px-lg">
        {day.orders.map((order, index) => (
          <OrderItem
            key={index}
            mealType={order.mealType}
            mealName={order.mealName}
            mealCount={order.mealCount}
          />
        ))}
      </div>
    </div>
  );
}