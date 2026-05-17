import { useMemo } from 'react';
import { useMenus } from '@/features/definition/hooks/menu';
import { Controller } from 'react-hook-form';
import CustomSelect from '@/components/shared/custom-select';
import type { SelectProps } from '../type';


export default function MenusSelect({ control , error }: SelectProps) {
  const { data: menusData, isLoading } = useMenus();

  const menuOptions = useMemo(() => {
    if (!menusData) return [];

    return menusData
      .filter((menu) => menu.is_active)
      .map((menu) => ({
        label: menu.name,
        value: menu.id,
      }));
  }, [menusData]);

  return (
    <Controller
      control={control}
      name="menu_ids"
      render={({ field }) => (
        <CustomSelect
          label="منو"
          options={menuOptions}
          isDisabled={isLoading}
          placeholder="منو را انتخاب نمایید"
          required
          error={error}
          value={
            menuOptions.find(
              (opt) => opt.value === field.value?.[0]
            ) || null
          }
          onChange={(option: any) => {
            field.onChange(
              option ? [option.value] : []
            );
          }}
        />
      )}
    />
  );
}