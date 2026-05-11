import { submitFormData } from "@/services/api-method-functions";
import type { FoodFormValues } from "@/features/food/type";
import { weekDays } from "@/features/food/constants"

export const createFoodService = async (payload: FoodFormValues, imageId?: string) => {
    const days = payload.is_daily ? payload.days : weekDays.map((day) => day.day);

    return submitFormData({
        endPoint: 'admin/v1/food',
        type: 'post',
        formData: {
            name: payload.name,
            description: payload.description,
            price: payload.price,
            menu_ids: payload.menu_ids,
            meal_types: payload.meal_types,
            category_id: payload.category_id,
            is_daily: payload.is_daily,
            days,
            image_id: imageId,
        },
    });
};