import { Funnel, Trash2 } from 'lucide-react';
import { Button } from 'rg-dst';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import type { Option } from '@/components/shared/type';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedMeals: Option[];
  setSelectedMeals: (val: Option[]) => void;
  mealOptions: Option[];
};

export default function ContractsFilterModal({
  isOpen,
  onClose,
  selectedMeals,
  setSelectedMeals,
  mealOptions,
}: Props) {
  const handleReset = () => {
    setSelectedMeals([]);
  };

  return (
    <SharedModal
      isOpen={isOpen}
      onClose={onClose}
      title="فیلترها"
      icon={<Funnel size={24} color="var(--color-gray-light-500)" />}
      iconBgClass="bg-gray-light-100"
      confirmText="اعمال"
      footerLeft={
        <Button
          variant="secondaryColor"
          className="bg-white border-0"
          leftIcon={<Trash2 size={20} />}
          onClick={handleReset}
        >
          حذف تمام فیلترها
        </Button>
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
