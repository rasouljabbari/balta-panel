import type { Category, GetCategoryResponse } from "@/features/definition/type";
import { getData, getFormDataPost } from "@/services/api-method-functions";

export const getCategoriesService = async (): Promise<GetCategoryResponse> => {
    return getData({
        endPoint: 'admin/v1/definitions/category',
        type: 'get',
        hasTenant: true,
    });
};

export const createCategoryService = async (payload: Category) => {
    return getData({
        endPoint: 'admin/v1/definitions/category',
        type: 'post',
        dataParams: {
            name: payload.name,
            order_limit: payload.order_limit
        },
    });
};

export const updateCategoryService = async (payload: Category & { id: number }) => {
    return getFormDataPost({
        endPoint: `admin/v1/definitions/category/${payload.id}`,
        type: 'put',
        formData: payload,
    });
};

export const changeStatusCategoryService = async (id: number) => {
    return getData({
        endPoint: `admin/v1/definitions/category/${id}`,
        type: 'patch'
    });
};