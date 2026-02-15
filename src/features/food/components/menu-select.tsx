import { useMemo } from 'react';
import { useMenus } from '@/features/definition/hooks/menu';
import { Controller, type Control } from 'react-hook-form';
import CustomSelect from '@/components/shared/custom-select';
import type { FoodFormValues } from '../type';

interface MenusSelectProps {
  control: Control<FoodFormValues>;
}

export default function MenusSelect({ control }: MenusSelectProps) {
  const { data: menusData, isLoading } = useMenus();

  const menuOptions = useMemo(() => {
    if (!menusData) return [];

    return menusData.map((menu) => ({
      label: menu.name,
      value: menu.id,
    }));
  }, [menusData]);

  return (
    <Controller
      control={control}
      name="menus"
      render={({ field }) => (
        <CustomSelect
          label="منو"
          options={menuOptions}
          isMulti
          isDisabled={isLoading}
          {...field}
          placeholder="منو را انتخاب نمایید"
        />
      )}
    />
  );
}
