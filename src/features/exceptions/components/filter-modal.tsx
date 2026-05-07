import { Funnel } from 'lucide-react';
import { ClearFiltersButton } from '@/components/shared/clear-filter-button';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import type { Option } from '@/components/shared/type';
import type { FilterModalProps } from '../type';
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
}: FilterModalProps) {

  const { data: menusData } = useMenus();

  const menuList = useMemo(() => {
    if (!menusData) return [];

    return menusData.map((menu) => ({
      label: menu.name,
      value: menu.id,
    }));
  }, [menusData]);

  const { data: categoriesData } = useCategories();

  const categoryList = useMemo(() => {
    if (!categoriesData) return [];

    return categoriesData.map((category) => ({
      label: category.name,
      value: category.id,
    }));
  }, [categoriesData]);

  const handleReset = () => {
    setSelectedMenus([]);
    setSelectedCategories([]);
    setSelectedStatus([]);
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
          options={menuList}
          isMulti
          value={selectedMenus}
          onChange={(val) => setSelectedMenus(val as Option[])}
        />

        <CustomSelect
          label="دسته بندی"
          placeholder="انتخاب کنید"
          options={categoryList}
          isMulti
          value={selectedCategories}
          onChange={(val) => setSelectedCategories(val as Option[])}
        />

        <CustomSelect label="وضعیت نمایش در منو" placeholder="انتخاب کنید" options={STATUS_OPTIONS} />
      </div>
    </SharedModal>
  );
}