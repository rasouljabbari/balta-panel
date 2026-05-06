
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FoodFormValues } from "../type";
import { submitFormData } from "@/services/api-method-functions";
import { toast } from "react-toastify";

export const useUpdateFood = (
    onClose: () => void,
  ) => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (payload: FoodFormValues & { id: string }) =>
        submitFormData({
            endPoint: `admin/v1/food/${payload.id}`,
            type: 'put',
            formData: payload,
        }),
        onSuccess: () => {
            toast.success('غذا با موفقیت ویرایش شد.');
            queryClient.invalidateQueries({ queryKey: ['food'] });
            onClose();
        },
        onError: (error: any) => {
            const message =
              error?.response?.data?.message ||
              error?.message ||
              'خطایی رخ داده است';
          
            toast.error(message);
          },
    });
};