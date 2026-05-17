import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {
  createContractSettingService,
  getContractSettingsCustomer,
  getContractSettingsService,
  updateContractSettingService,
} from '../services/contracts-api';
import type {
  ContractSettingPayload,
  GetContractSettingsResponse,
} from '../type';

export const CONTRACT_SETTINGS_QUERY_KEY = ['contract-settings'] as const;

export const CONTRACT_SETTINGS_CUSTOMER_QUERY_KEY = [
  'contract-settings-customer',
] as const;

export const useContractSettings = (page: number) => {
  return useQuery({
    queryKey: [...CONTRACT_SETTINGS_QUERY_KEY, page],

    queryFn: () => getContractSettingsService(page),

    select: (res) => res.data,
  });
};

export const useContractSettingsCustomer = (customer_id?: string) => {
  return useQuery<GetContractSettingsResponse>({
    queryKey: [...CONTRACT_SETTINGS_CUSTOMER_QUERY_KEY, customer_id],

    queryFn: () => getContractSettingsCustomer(customer_id as string),

    enabled: !!customer_id,
  });
};

export const useCreateContractSetting = (
  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ContractSettingPayload) =>
      createContractSettingService(payload),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: CONTRACT_SETTINGS_QUERY_KEY,
        }),

        queryClient.invalidateQueries({
          queryKey: [
            ...CONTRACT_SETTINGS_CUSTOMER_QUERY_KEY,
            variables.customer_id,
          ],
        }),
      ]);

      setServerValidationError?.(null);

      toast.success('تنظیمات قرارداد با موفقیت ایجاد شد');
    },

    onError: (error: any) => {
      setServerValidationError?.(error);

      toast.error(
        error?.response?.data?.message || 'خطا در ایجاد تنظیمات قرارداد',
      );
    },
  });
};

export const useUpdateContractSetting = (
  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: ContractSettingPayload;
    }) => updateContractSettingService(id, payload),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: CONTRACT_SETTINGS_QUERY_KEY,
        }),

        queryClient.invalidateQueries({
          queryKey: [
            ...CONTRACT_SETTINGS_CUSTOMER_QUERY_KEY,
            variables.payload.customer_id,
          ],
        }),
      ]);

      setServerValidationError?.(null);

      toast.success('تنظیمات قرارداد با موفقیت ویرایش شد');
    },

    onError: (error: any) => {
      setServerValidationError?.(error);

      toast.error(
        error?.response?.data?.message || 'خطا در ویرایش تنظیمات قرارداد',
      );
    },
  });
};