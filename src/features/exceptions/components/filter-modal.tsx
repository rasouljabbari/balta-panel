import { Funnel } from 'lucide-react';
import { ClearFiltersButton } from '@/components/shared/clear-filter-button';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import type { Option } from '@/components/shared/type';
import type { FilterModalProps, ExceptionsApiFoodCategory } from '../type';
import { useMenus } from '@/features/definition/hooks/menu';
import { useCategories } from '@/features/definition/hooks/category';
import { STATUS_OPTIONS } from '@/constants';

import { useEffect, useMemo, useState } from 'react';

export default function FilterModal({
  isOpen,
  onClose,
  appliedFilters,
  onApplyFilters,
}: FilterModalProps) {
  const [draftMenus, setDraftMenus] = useState<Option[]>([]);
  const [draftCategories, setDraftCategories] = useState<Option[]>([]);
  const [draftStatus, setDraftStatus] = useState<Option[]>([]);

  useEffect(() => {
    if (!isOpen) return;
    setDraftMenus(appliedFilters.menus);
    setDraftCategories(appliedFilters.categories);
    setDraftStatus(appliedFilters.status);
  }, [
    isOpen,
    appliedFilters.menus,
    appliedFilters.categories,
    appliedFilters.status,
  ]);

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
    setDraftMenus([]);
    setDraftCategories([]);
    setDraftStatus([]);
  };

  const handleConfirm = () => {
    onApplyFilters({
      menus: draftMenus,
      categories: draftCategories,
      status: draftStatus,
    });
    onClose();
  };

  const activeFiltersCount =
    draftMenus.length + draftCategories.length + draftStatus.length;

  return (
    <SharedModal
      isOpen={isOpen}
      onClose={onClose}
      title="فیلترها"
      icon={<Funnel size={24} color="var(--color-gray-light-500)" />}
      iconBgClass="bg-gray-light-100"
      confirmText="اعمال"
      onConfirm={handleConfirm}
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
          required={false}
          value={draftMenus}
          onChange={(val) => setDraftMenus(val as Option[])}
        />

        <CustomSelect
          label="دسته بندی"
          placeholder="انتخاب کنید"
          options={activeCategoryList}
          isMulti
          required={false}
          value={draftCategories}
          onChange={(val) => setDraftCategories(val as Option[])}
        />

        <CustomSelect
          label="وضعیت نمایش در منو"
          placeholder="انتخاب کنید"
          options={STATUS_OPTIONS}
          isMulti
          required={false}
          value={draftStatus}
          onChange={(val) => setDraftStatus(val as Option[])}
        />
      </div>
    </SharedModal>
  );
}