import { useQuery } from '@tanstack/react-query';
import { listExceptionsService } from '../services/list-exceptions';
import type {
  ExceptionsMeal,
  Item,
  ListExceptionsResponse,
  ListExceptionsResult,
} from '../type';

const mapApiMealToUiMeal = (
  apiMeal: ListExceptionsResponse['data']['meals'][number],
): ExceptionsMeal => {
  return {
    id: apiMeal.id,
    name: apiMeal.name,
    items: apiMeal.foods.map((food): Item => ({
      id: food.id,
      foodId: food.id,
      name: food.name,
      is_active: !food.exclusion,
      is_daily: food.is_daily,
      category: food.category.name,
      categoryId: food.category.id,
      menus: food.menus,
      exclusion: food.exclusion ?? null,
    })),
  };
};

export const useListExceptions = (date?: string) => {
  return useQuery<ListExceptionsResult, any, ListExceptionsResult>({
    queryKey: ['exclusions', date],
    queryFn: async () => {
      if (!date) throw new Error('Missing date for exclusions request');
      const res = await listExceptionsService(date);
      return {
        meals: res.data.meals.map(mapApiMealToUiMeal),
      };
    },
    enabled: !!date,
    select: (data) => data,
  });
};

