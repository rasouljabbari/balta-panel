
import { submitFormData } from "@/services/api-method-functions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import type { FoodFormValues } from "../type";

export const useUpdateFood = (
  onClose: () => void,
  handleApiFormErrors: any,
  setError: any
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
      handleApiFormErrors({
        error,
        setError
      });
    },
  });
};