import { useMemo } from 'react';
import { useCategories } from '@/features/definition/hooks/category';
import { Controller } from 'react-hook-form';
import CustomSelect from '@/components/shared/custom-select';
import type { SelectProps } from '../type';


export default function CategoriesSelect({ control }: SelectProps) {
  const { data: categoriesData, isLoading } = useCategories();

  const categoryOptions = useMemo(() => {
    if (!categoriesData) return [];

    return categoriesData.map((category) => ({
      label: category.name,
      value: category.id,
    }));
  }, [categoriesData]);

  return (
    <Controller
      control={control}
      name="categories"
      render={({ field }) => (
        <CustomSelect
          label="دسته بندی"
          options={categoryOptions}
          isMulti
          isDisabled={isLoading}
          {...field}
          placeholder="دسته بندی را انتخاب نمایید"
        />
      )}
    />
  );
}