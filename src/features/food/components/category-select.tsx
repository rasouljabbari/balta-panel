import { useMemo } from 'react';
import { useCategories } from '@/features/definition/hooks/category';
import { Controller } from 'react-hook-form';
import CustomSelect from '@/components/shared/custom-select';
import type { SelectProps } from '../type';


export default function CategoriesSelect({ control , error }: SelectProps) {
  const { data: categoriesData, isLoading } = useCategories();

  const categoryOptions = useMemo(() => {
    if (!categoriesData) return [];

    return categoriesData
      .filter((category) => category.is_active)
      .map((category) => ({
        label: category.name,
        value: category.id,
      }));
  }, [categoriesData]);

  return (
    <Controller
      control={control}
      name="category_id"
      render={({ field }) => (
        <CustomSelect
          label="دسته بندی"
          options={categoryOptions}
          isDisabled={isLoading}
          placeholder="دسته بندی را انتخاب نمایید"
          required
          error={error}
          value={
            categoryOptions.find(opt => opt.value === field.value) || null
          }
          
          onChange={(option) => {
            field.onChange(option ? option.value : null);
          }}
        />
      )}
    />
  );
}