import { getData } from '@/services/api-method-functions';
import type { GetContractSettingsResponse } from '../type';

export const getContractSettingsService = async (
  page: number,
): Promise<GetContractSettingsResponse> => {
  return getData({
    endPoint: `admin/v1/contract-settings?page=${page}`,
    type: 'get',
  });
};

export const getContractSettingsCustomer = async (
  customer_id: string,
): Promise<GetContractSettingsResponse> => {
  return getData({
    endPoint: `admin/v1/contract-settings/${customer_id}`,
    type: 'get',
  });
};