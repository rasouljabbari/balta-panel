import type { FoodListParams, FoodListResponse } from '@/features/food/type';
import { getData } from "@/services/api-method-functions";

export const listFoodService = async (params?: FoodListParams): Promise<FoodListResponse> => {
    const dataParams = {
        page: params?.page,
        per_page: params?.per_page,
        ...(
            params?.search ? {
                search: params?.search
            } : {}
        )
    }

    return getData({
        endPoint: 'admin/v1/food',
        type: 'get',
        dataParams
    });
};