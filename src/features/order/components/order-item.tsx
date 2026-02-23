import { cn } from "@/utils/cn";
import type { OrderItemProps } from "../types";

export default function OrderItem({ mealType, mealName, mealCount }: OrderItemProps) {
  return (
    <div
      role="listitem"
      aria-label={`${mealName}: ${mealCount} سفارش`}
      className={cn("flex items-center justify-between mb-md rounded-sm px-md py-xs text-gray-light-700 text-sm font-medium", 
        mealType === "breakfast" ? "bg-yellow-50" : 
        mealType === "lunch" ? "bg-green-light-50" : "bg-fuchsia-50")}
    >
      <span>{mealName}</span>
      <span aria-hidden="true">{mealCount}</span>
    </div>
  )
}