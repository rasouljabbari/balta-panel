import {
  changeStatusPackageService,
  createPackageService,
  getPackagesService,
  updatePackageService,
} from '@/features/definition/services/packages';
import type { Package } from '@/features/definition/type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const PACKAGES_QUERY_KEY = ['packages'];

export const usePackaging = () => {
  return useQuery({
    queryKey: PACKAGES_QUERY_KEY,
    queryFn: getPackagesService,
    select: (res) => res.data.packagings,
  });
};

export const useCreatePackage = (
  setModalOpen: (modalOpen: boolean) => void,

  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Package) => createPackageService(payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: PACKAGES_QUERY_KEY,
      });

      setModalOpen(false);

      setServerValidationError?.(null);

      toast.success('بسته‌بندی با موفقیت ایجاد شد');
    },

    onError: (err: any) => {
      setServerValidationError?.(err);

      toast.error(err?.response?.data?.message || 'خطا در ایجاد بسته‌بندی');
    },
  });
};

export const useUpdatePackage = (
  setModalOpen: (modalOpen: boolean) => void,

  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Package) => updatePackageService(payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: PACKAGES_QUERY_KEY,
      });

      setModalOpen(false);

      setServerValidationError?.(null);

      toast.success('بسته‌بندی با موفقیت ویرایش شد');
    },

    onError: (err: any) => {
      setServerValidationError?.(err);

      toast.error(err?.response?.data?.message || 'خطا در ویرایش بسته‌بندی');
    },
  });
};

export const useChangeStatusPackage = (
  setStatusModalOpen: (statusModalOpen: boolean) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => changeStatusPackageService(id),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: PACKAGES_QUERY_KEY,
      });

      setStatusModalOpen(false);

      toast.success('وضعیت بسته‌بندی با موفقیت تغییر کرد');
    },

    onError: (err: any) => {
      toast.error(
        err?.response?.data?.message || 'خطا در تغییر وضعیت بسته‌بندی',
      );
    },
  });
};