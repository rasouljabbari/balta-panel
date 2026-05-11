import { showFoodService } from "@/features/food/services/show-food";
import { useQuery } from "@tanstack/react-query";
import type { FoodItem } from "@/features/food/type"

export type FoodId = number | string | undefined;

export const useShowFood = (id?: FoodId) => {
  const enabled = id !== undefined && id !== null && String(id).trim() !== '';

  return useQuery({
    queryKey: ["food", id] as const,
    queryFn: ({ queryKey }) => {
      const [, resolvedFoodId] = queryKey;

      if (resolvedFoodId === undefined || resolvedFoodId === null || String(resolvedFoodId).trim() === '') {
        throw new Error("Food id is required");
      }

      return showFoodService(String(resolvedFoodId) as unknown as any);
    },
    enabled,
    select: (res) => res.data as FoodItem,
  });
};