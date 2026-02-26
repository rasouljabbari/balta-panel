import { changeStatusCategoryService, createCategoryService, getCategoriesService, updateCategoryService } from "@/features/definition/services/category";
import type { Category } from "@/features/definition/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CATEGORIES_QUERY_KEY });
      setModalOpen(false);
      setServerValidationError?.(null);
    },
    onError: (error: any) => {
      setServerValidationError?.(error);
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CATEGORIES_QUERY_KEY });
      setModalOpen(false);
      setServerValidationError?.(null); // پاک کردن خطاهای سرور بعد از موفقیت
    },
    onError: (error: any) => {
      setServerValidationError?.(error); // ذخیره خطاهای سرور
    },
  });
};

export const useChangeStatusCategory = (setStatusModalOpen: (statusModalOpen: boolean) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      changeStatusCategoryService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CATEGORIES_QUERY_KEY });
      setStatusModalOpen(false)
    },
  });
};