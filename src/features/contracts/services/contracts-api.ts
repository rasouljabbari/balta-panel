import { getData } from '@/services/api-method-functions';
import type {
  ContractSettingPayload,
  GetContractSettingsResponse,
} from '../type';

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

export const createContractSettingService = async (
  payload: ContractSettingPayload,
) => {
  return getData({
    endPoint: 'admin/v1/contract-settings',
    type: 'post',
    dataParams: {
      meal: payload.meal,
      delivery_time: payload.delivery_time,
      count: payload.count,
      variety: payload.variety,
      kitchen_description: payload.kitchen_description,
      default_driver: payload.default_driver,
      is_active: payload.is_active,
      initial_order_max_tolerance: payload.initial_order_max_tolerance,
      initial_order_min_tolerance: payload.initial_order_min_tolerance,
      daily_order_tolerance: payload.daily_order_tolerance,
      customer_id: payload.customer_id,
      menus: payload.menus,
    },
  });
};

export const updateContractSettingService = async (
  id: number,
  payload: ContractSettingPayload,
) => {
  return getData({
    endPoint: `admin/v1/contract-settings/${id}`,
    type: 'put',
    dataParams: {
      meal: payload.meal,
      delivery_time: payload.delivery_time,
      count: payload.count,
      variety: payload.variety,
      kitchen_description: payload.kitchen_description,
      default_driver: payload.default_driver,
      is_active: payload.is_active,
      initial_order_max_tolerance: payload.initial_order_max_tolerance,
      initial_order_min_tolerance: payload.initial_order_min_tolerance,
      daily_order_tolerance: payload.daily_order_tolerance,
      customer_id: payload.customer_id,
      menus: payload.menus,
    },
  });
};