import DayColumn from "@/features/order/components/day-columns";
import type { OrderGridProps } from "@/features/order/types";


export default function OrderGrid({ days }: OrderGridProps) {
  return (
    <div role="grid" aria-label="جدول سفارش‌های هفتگی" className="grid grid-cols-7 [&>*:first-child]:border-r-0 flex-1">
      {days.map((day) => (
        <DayColumn
          key={day.fullDate}
          day={day}
        />
      ))}
    </div>
  );
}