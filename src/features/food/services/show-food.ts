import { getData } from "@/services/api-method-functions";
import type { SingleFoodResponse } from '../type';

export const showFoodService = async (id: string): Promise<SingleFoodResponse> => {
    return getData({
        endPoint: `admin/v1/food/${id}`,
        type: 'get',
    });
};