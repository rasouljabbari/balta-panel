import { getData } from "@/services/api-method-functions";
import type { FoodListResponse, FoodListParams } from '@/features/food/type';

export const listFoodService = async (params?: FoodListParams): Promise<FoodListResponse> => {
    return getData({
        endPoint: 'admin/v1/food',
        type: 'get',
        dataParams: params,
    });
};