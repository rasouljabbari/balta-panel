import { getData } from "@/services/api-method-functions";
import type { FoodListResponse } from '../type';

export const listFoodService = async (): Promise<FoodListResponse> => {
    return getData({
        endPoint: 'admin/v1/food',
        type: 'get',
    });
};