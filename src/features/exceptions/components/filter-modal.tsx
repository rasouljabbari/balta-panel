import { Funnel } from 'lucide-react';
import { ClearFiltersButton } from '@/components/shared/clear-filter-button';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import type { Option } from '@/components/shared/type';
import type { FilterModalProps, ExceptionsApiFoodCategory } from '../type';
import { useMenus } from '@/features/definition/hooks/menu';
import { useCategories } from '@/features/definition/hooks/category';
import { STATUS_OPTIONS } from '@/constants';

import { useMemo } from 'react'

export default function FilterModal({
  isOpen,
  onClose,
  selectedMenus,
  setSelectedMenus,
  selectedCategories,
  setSelectedCategories,
  setSelectedStatus,
  selectedStatus
}: FilterModalProps) {

  const { data: menusData } = useMenus();

  const activeMenuOptions = useMemo(() => {
    return menusData
      ?.filter(menu => menu.is_active)
      ?.map(menu => ({
        label: menu.name,
        value: menu.id.toString(),
      })) ?? [];
  }, [menusData]);
  const { data: categoriesData } = useCategories();

  const activeCategoryList = useMemo(() => {
    if (!categoriesData) return [];

    return categoriesData
    ?.filter((category: ExceptionsApiFoodCategory) => category?.is_active)
    ?.map((category) => ({
      label: category.name,
      value: category.id,
    }));
  }, [categoriesData]);

  const handleReset = () => {
    setSelectedMenus?.([]);
    setSelectedCategories?.([]);
    setSelectedStatus?.([]);
  };

  // تعداد فیلتر فعال
  const activeFiltersCount = selectedMenus?.length ?? 0;

  return (
    <SharedModal
      isOpen={isOpen}
      onClose={onClose}
      title="فیلترها"
      icon={<Funnel size={24} color="var(--color-gray-light-500)" />}
      iconBgClass="bg-gray-light-100"
      confirmText="اعمال"
      footerLeft={
        <ClearFiltersButton
          activeFiltersCount={activeFiltersCount}
          onClear={handleReset}
        />
      }
    >
      <div className="flex flex-col gap-xl">
        <CustomSelect
          label="منو"
          placeholder="انتخاب کنید"
          options={activeMenuOptions}
          isMulti
          value={selectedMenus ?? []}
          onChange={(val) => setSelectedMenus?.(val as Option[])}
        />

        <CustomSelect
          label="دسته بندی"
          placeholder="انتخاب کنید"
          options={activeCategoryList}
          isMulti
          value={selectedCategories ?? []}
          onChange={(val) => setSelectedCategories?.(val as Option[])}
        />

        <CustomSelect 
            label="وضعیت نمایش در منو" 
            placeholder="انتخاب کنید" 
            options={STATUS_OPTIONS}
            value={selectedStatus ?? []}
            onChange={(val) => setSelectedStatus?.(val as Option[])}/>
      </div>
    </SharedModal>
  );
}