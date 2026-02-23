import { getData } from '@/utils/api-methods/api-method-functions';
import type {
  CreateDriverPayload,
  DriverResponse,
  GetDriversResponse,
} from '../types';

export const createDriverService = async (
  payload: CreateDriverPayload,
): Promise<DriverResponse> => {
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
