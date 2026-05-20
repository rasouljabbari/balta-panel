import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createFoodService } from "../services/create-food";
import { uploadFileService } from "../services/upload-file";
import type { FoodFormValues } from "../type";


export const useCreateFood = (
  onClose: () => void,
  handleApiFormErrors: any,
  setError: any
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
      handleApiFormErrors({
        error,
        setError
      });
    },
  });
};
