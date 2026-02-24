import type { GetMenusResponse, Menu } from "@/features/definition/type";
import { getData, submitFormData } from "@/services/api-method-functions";

export const getMenusService = async (): Promise<GetMenusResponse> => {
    return getData({
        endPoint: 'admin/v1/definitions/menu',
        type: 'get'
    });
};

export const createMenuService = async (payload: Menu) => {
    return getData({
        endPoint: 'admin/v1/definitions/menu',
        type: 'post',
        dataParams: {
            name: payload.name,
            default_packaging_id: payload.default_packaging_id,
        },
    });
};

export const updateMenuService = async (payload: Menu) => {
    return submitFormData({
        endPoint: `admin/v1/definitions/menu/${payload.id}`,
        type: 'put',
        formData: payload,
    });
};

export const changeStatusMenuService = async (id: number) => {
    return getData({
        endPoint: `admin/v1/definitions/menu/${id}`,
        type: 'patch'
    });
};