import DayColumn from "@/features/order/components/day-columns";
import type { OrderGridProps } from "@/features/order/types";


export default function OrderGrid({ days, isCurrentWeek }: OrderGridProps) {
  return (
    <div className="grid grid-cols-7 [&>*:first-child]:border-r-0 flex-1">
      {days.map((day, index) => (
        <DayColumn
          key={index}
          day={day}
          isCurrentWeek={isCurrentWeek}
        />
      ))}
    </div>
  );
}