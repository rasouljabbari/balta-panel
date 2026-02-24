import { getData } from '@/services/api-method-functions';
import type { CreateDriverPayload, CreateDriverResponse, GetDriverByIdResponse, GetDriversResponse } from '../types';


export const createDriverService = async (
  payload: CreateDriverPayload,
): Promise<CreateDriverResponse> => {
  return getData({
    endPoint: 'admin/v1/drivers',
    type: 'post',
    dataParams: payload,
    isHeaderJson: true,
  });
};

export const getDriversService = async (): Promise<GetDriversResponse> => {
  return getData({
    endPoint: 'admin/v1/drivers',
    type: 'get',
    hasTenant: true,
  });
};

export const getDriverByIdService = async (
  id: number | string,
): Promise<GetDriverByIdResponse> => {
  return getData({
    endPoint: `admin/v1/drivers/${id}`,
    type: 'get',
    hasTenant: true,
  });
};

export const toggleDriverStatusService = async (driverId: number) => {
  return getData({
    endPoint: `admin/v1/drivers/${driverId}`, 
    type: 'patch',
    isHeaderJson: true,
  });
};