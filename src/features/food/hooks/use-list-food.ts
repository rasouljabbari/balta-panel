import { listFoodService } from "@/features/food/services/list-food";
import type { FoodItem, FoodListParams } from "@/features/food/type";
import { useQuery } from "@tanstack/react-query";


export const useListFood = ({ page = 1, per_page = 10, search }: FoodListParams = {}) => {
  return useQuery({
    queryKey: ["food", page, per_page, search],
    queryFn: () => listFoodService({
      page,
      per_page,
      search
    }),
    select: (res) => ({
      foods: res.data.foods as FoodItem[],
      meta: res.data.meta,
    }),
  });
};