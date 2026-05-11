import { submitFormData } from "@/services/api-method-functions";
import type { FoodFormValues } from "../type";
import { weekDays } from "../constants";
import { uploadFileService } from "./upload-file";

export const updateFoodService = async (payload: FoodFormValues & { id: number }) => {
    const days = payload.is_daily ? payload.days : weekDays.map((day) => day.day);
    let imageId: string | undefined;

    if (payload.image) {
        const uploadResponse = await uploadFileService(payload.image);
        imageId = uploadResponse.data.file.id;
    }
    return submitFormData({
        endPoint: `admin/v1/food/${payload.id}`,
        type: 'put',
        formData: {
            name: payload.name,
            description: payload.description,
            price: payload.price,
            menu_ids: payload.menu_ids,
            meal_types: payload.meal_types.map((meal: any) => meal.id),
            category_ids: payload.category_id,
            is_daily: payload.is_daily,
            days,
            image_id: imageId,
        },
    });
};  