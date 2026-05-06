import { listFoodService } from "@/features/food/services/list-food";
import { useQuery } from "@tanstack/react-query";
import type { FoodItem } from "@/features/food/type"

export const useListFood = () => {
  return useQuery({
    queryKey: ["food"],
    queryFn: listFoodService,
    select: (res) => res.data.foods as FoodItem[],
  });
};