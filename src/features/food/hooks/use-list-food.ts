import { listFoodService } from "@/features/food/services/list-food";
import { useQuery } from "@tanstack/react-query";
import type { FoodItem, FoodListParams } from "@/features/food/type"


export const useListFood = ({ page = 1, per_page = 10 }: FoodListParams = {}) => {
  return useQuery({
    queryKey: ["food", page, per_page],
    queryFn: () => listFoodService({ 
      page, 
      per_page,
    }),
    select: (res) => ({
      foods: res.data.foods as FoodItem[],
      meta: res.data.meta,
    }),
  });
};