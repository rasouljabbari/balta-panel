import { useState } from 'react';
import type { ContractItem } from '@/features/contracts/type';
import { meal } from '@/features/food/constants';
import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';
import type { Option } from '@/components/shared/type';
import ContractsTableCard from '@/features/contracts/components/contract-table-card';
import ContractsFilterModal from '@/features/contracts/components/contract-filter-modal';

export default function ContractsPage() {
  const navigate = useNavigate();

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState<Option[]>([]);

  const [contracts] = useState<ContractItem[]>([
    {
      id: 1,
      name: 'راهکارگستران',
      branches: 'آبرسان',
      representative: 'علیرضا ابراهیمی',
      representative_number: '۰۹۹۲۱۲۳۱۲۳۴',
      meals: ['صبحانه', 'ناهار'],
      status: 'فعال',
    },
    {
      id: 2,
      name: 'تراکتورسازی',
      branches: 'شهیدمدنی',
      representative: 'سارا محبی',
      representative_number: '۰۹۹۲۱۲۳۱۲۳۴',
      meals: ['ثبت نشده'],
      status: 'غیرفعال',
    },
  ]);

  const handleEdit = (row: ContractItem) => {
    navigate(`/contracts/edit/${row.id}`);
  };

  if (contracts.length > 0) {
    return (
      <>
        <ContractsTableCard
          data={contracts}
          onEdit={handleEdit}
          onOpenFilter={() => setOpenFilterModal(true)}
        />

        <ContractsFilterModal
          isOpen={openFilterModal}
          onClose={() => setOpenFilterModal(false)}
          selectedMeals={selectedMeals}
          setSelectedMeals={setSelectedMeals}
          mealOptions={meal}
        />
      </>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-xl">
          <div className="flex items-center justify-center border w-10 h-10 rounded-lg border-gray-light-200">
            <FileText size={20} color="var(--color-gray-light-500)" />
          </div>
          <h2 className="text-lg font-semibold text-gray-light-900">
            لیست قراردادها
          </h2>
        </div>
      </CardHeader>

      <div className="py-4xl">
        <EmptyBox
          title="لیست قراردادهای شما خالی است"
          image="/assets/images/empty-contract.webp"
        />
      </div>
    </Card>
  );
}
