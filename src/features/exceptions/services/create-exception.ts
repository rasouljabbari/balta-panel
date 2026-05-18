import { getData } from "@/services/api-method-functions";
import { type CreateExceptionPayload } from "@/features/exceptions/type";

export const createExceptionService = async (payload: CreateExceptionPayload) => {
    return getData({
        endPoint: 'admin/v1/exclusions',
        type: 'post',
        dataParams: {
            food_id: payload.food_id,
            meal_id: payload.meal_id,
            date: payload.date,
        },
    });
};