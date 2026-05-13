import ViewDetailsLink from "@/components/shared/view-details-link";
import type { OrderCardProps } from "@/features/order/types";
import { cn } from "@/utils/cn";
import { ChevronLeft } from "lucide-react";

const variantStyles = {
  default: "bg-gray-light-50",
  green: "bg-green-light-50",
  fuchsia: "bg-fuchsia-50",
  yellow: "bg-yellow-50",
};

export default function OrderCard({
  day,
  date,
  variant = "default",
  readMoreLink,
  onViewDetails,
  children,
  disabled = false,
  dayClassName,
  centerDay = false,
  className,
}: OrderCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-gray-light-200 shadow-xs overflow-hidden flex flex-col",
        variantStyles[variant], 
        disabled && "opacity-60",
        className
      )}
    >
      <div
        className={cn(
          "px-5",
          
          centerDay
            ? "flex justify-center py-1.5"
            : "flex items-center justify-between py-3",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-1 2xl:gap-2",
            centerDay && "justify-center",
          )}
        >
          <span
            className={cn(
              "font-semibold text-lg 2xl:text-xl pl-1 2xl:pl-3 text-rtext-secondary-700",
              dayClassName,
              centerDay && "pl-0 text-center text-md",
            )}
          >
            {day}
          </span>

          {!centerDay && date && (
            <span className="text-sm 2xl:text-md text-rtext-quaternary-500 border-r border-gray-light-300 pr-2 2xl:pr-4">
              {date}
            </span>
          )}
        </div>

        {!centerDay && (readMoreLink || onViewDetails) && (
          onViewDetails ? (
            <button
              onClick={onViewDetails}
              className="flex items-center gap-2 text-sm font-medium text-gray-light-600 hover:text-gray-dark-800 transition-all duration-200 ease-in-out"
            >
              مشاهده جزئیات
              <ChevronLeft className="w-5 h-5 text-gray-light-600" />
            </button>
          ) : (
            <ViewDetailsLink to={readMoreLink!} />
          )
        )}
      </div>

      <div className="flex flex-col gap-xl bg-white rounded-b-xl p-5 border-t rounded-2xl border-gray-light-200 flex-1">
        {children}
      </div>  
    </div>
  );
}
