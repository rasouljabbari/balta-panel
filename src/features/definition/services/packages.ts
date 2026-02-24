import type { GetPackageResponse, Package } from "@/features/definition/type";
import { getData, submitFormData } from "@/services/api-method-functions";

export const getPackagesService = async (): Promise<GetPackageResponse> => {
    return getData({
        endPoint: 'admin/v1/definitions/packaging',
        type: 'get'
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
    return submitFormData({
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