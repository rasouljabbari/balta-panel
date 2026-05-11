import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFoodService } from "../services/create-food";
import type { FoodFormValues } from "../type";
import { toast } from "react-toastify";
import { uploadFileService } from "../services/upload-file";


export const useCreateFood = (
  onClose: () => void,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (food: FoodFormValues) => {
      let imageId: string | undefined;

      if (food.image) {
        const uploadResponse = await uploadFileService(food.image);
        imageId = uploadResponse.data.file.id;
      }

      return createFoodService(food, imageId);
    },
    onSuccess: () => {
      toast.success('غذا با موفقیت ثبت شد.');
      queryClient.invalidateQueries({ queryKey: ['food'], exact: false });
      onClose();
    },
    onError: (error: any) => {
      const response = error?.response?.data;
    
      const message =
        response?.message ||
        error?.message ||
        'خطایی رخ داده است';
    
      const fieldErrors = response?.errors
        ? Object.values(response.errors).flat().join('\n')
        : null;
    
      toast.error(fieldErrors || message);
    },
  });
};
