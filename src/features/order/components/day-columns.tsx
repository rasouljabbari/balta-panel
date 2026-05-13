import OrderItem from "@/features/order/components/order-item";
import type { DayItem } from "@/features/order/types";
import { cn } from "@/utils/cn";
import { useNavigate } from "react-router-dom";


export default function DayColumn({
  day,
}: {
  day: DayItem;
  }) {
    const navigate = useNavigate();


  return (
    <div
      onClick={() => navigate(`/orders/${day.dayName}`)}
      role="gridcell"
      aria-label={`سفارش‌های ${day.dayName} ${day.fullDate}`}
      className="py-lg px-md 2xl:px-xl flex flex-col gap-lg border-r border-gray-light-200 hover:bg-gray-light-50 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            'text-lg font-semibold',
            day.isToday ? 'text-utility-brand-600' : 'text-gray-light-700',
          )}
        >
          {day.dayName}
        </span>

        <span className="text-sm text-gray-light-500">{day.fullDate}</span>
      </div>

      <hr
        className={cn(
          '-mx-md 2xl:-mx-xl',
          day.isToday ? 'border-utility-brand-600' : 'border-gray-light-200',
        )}
      />

      <div
        role="list"
        aria-label="لیست سفارش‌ها"
        className="mt-md flex-1 flex flex-col gap-xs px-md 2xl:px-lg"
      >
        {day?.orders?.length === 0 ? (
          <span className="text-center text-sm text-gray-light-500">
            سفارشی ثبت نشده است
          </span>
        ) : (
          day?.orders?.length > 0 &&
          day?.orders?.map((order, index) => (
            <OrderItem
              key={index}
              mealType={order.mealType}
              mealName={order.mealName}
              mealCount={order.mealCount}
            />
          ))
        )}
      </div>
    </div>
  );
}