import type { GetPackageResponse, Package } from "@/features/definition/type";
import { getData, getFormDataPost } from "@/utils/api-methods/api-method-functions";

export const getPackagesService = async (): Promise<GetPackageResponse> => {
    return getData({
        endPoint: 'admin/v1/definitions/packaging',
        type: 'get',
        hasTenant: true,
    });
};

export const createPackageService = async (payload: Package) => {
    return getData({
        endPoint: 'admin/v1/definitions/packaging',
        type: 'post',
        dataParams: {
            name: payload.name,
            price: payload.price,
        },
    });
};

export const updatePackageService = async (payload: Package) => {
    return getFormDataPost({
        endPoint: `admin/v1/definitions/packaging/${payload.id}`,
        type: 'put',
        formData: payload,
    });
};

export const changeStatusPackageService = async (id: number) => {
    return getData({
        endPoint: `admin/v1/definitions/packaging/${id}`,
        type: 'patch'
    });
};