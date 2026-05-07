import { useQuery } from '@tanstack/react-query';
import { getContractSettingsCustomer, getContractSettingsService } from '../services/contracts-api';
import type { GetContractSettingsResponse } from '../type';


export const CONTRACT_SETTINGS_QUERY_KEY = 'contract-settings';
export const CONTRACT_SETTINGS_CUSTOMER_QUERY_KEY = [
  'contract-settings-customer',
];

export const useContractSettings = (page: number) => {
  return useQuery({
    queryKey: [CONTRACT_SETTINGS_QUERY_KEY, page],
    queryFn: () => getContractSettingsService(page),
    select: (res) => res.data,
  });
};

export const useContractSettingsCustomer = (customer_id?: string) => {
  return useQuery<GetContractSettingsResponse>({
    queryKey: [CONTRACT_SETTINGS_CUSTOMER_QUERY_KEY, customer_id],
    queryFn: () => getContractSettingsCustomer(customer_id as string),
    enabled: !!customer_id,
  });
};