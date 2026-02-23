import { Funnel } from 'lucide-react';
import { ClearFiltersButton } from '@/components/shared/clear-filter-button';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import type { Option } from '@/components/shared/type';
import type { ContractsFilterModalProps } from '../type';


export default function ContractsFilterModal({
  isOpen,
  onClose,
  selectedMeals,
  setSelectedMeals,
  mealOptions,
}: ContractsFilterModalProps) {
  const handleReset = () => {
    setSelectedMeals([]);
  };

  // تعداد فیلتر فعال
  const activeFiltersCount = selectedMeals?.length ?? 0;

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
          label="وعده"
          placeholder="انتخاب کنید"
          options={mealOptions}
          isMulti
          value={selectedMeals}
          onChange={(val) => setSelectedMeals(val as Option[])}
        />

        <CustomSelect label="وضعیت" placeholder="انتخاب کنید" options={[]} />
      </div>
    </SharedModal>
  );
}