import {
  changeStatusCategoryService,
  createCategoryService,
  getCategoriesService,
  updateCategoryService,
} from '@/features/definition/services/category';
import type { Category } from '@/features/definition/type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const CATEGORIES_QUERY_KEY = ['categories'];

export const useCategories = () => {
  return useQuery({
    queryKey: CATEGORIES_QUERY_KEY,
    queryFn: getCategoriesService,
    select: (res) => res.data.categories,
  });
};

export const useCreateCategory = (
  setModalOpen: (modalOpen: boolean) => void,

  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Category) => createCategoryService(payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: CATEGORIES_QUERY_KEY,
      });

      setModalOpen(false);

      setServerValidationError?.(null);

      toast.success('دسته‌بندی با موفقیت ایجاد شد');
    },

    onError: (error: any) => {
      setServerValidationError?.(error);

      toast.error(error?.response?.data?.message || 'خطا در ایجاد دسته‌بندی');
    },
  });
};

export const useUpdateCategory = (
  setModalOpen: (modalOpen: boolean) => void,

  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Category & { id: number }) =>
      updateCategoryService(payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: CATEGORIES_QUERY_KEY,
      });

      setModalOpen(false);

      setServerValidationError?.(null);

      toast.success('دسته‌بندی با موفقیت ویرایش شد');
    },

    onError: (error: any) => {
      setServerValidationError?.(error);

      toast.error(error?.response?.data?.message || 'خطا در ویرایش دسته‌بندی');
    },
  });
};

export const useChangeStatusCategory = (
  setStatusModalOpen: (statusModalOpen: boolean) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => changeStatusCategoryService(id),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: CATEGORIES_QUERY_KEY,
      });

      setStatusModalOpen(false);

      toast.success('وضعیت دسته‌بندی با موفقیت تغییر کرد');
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || 'خطا در تغییر وضعیت دسته‌بندی',
      );
    },
  });
};