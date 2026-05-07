import { useMemo, useState } from 'react';
import ContractsFilterModal from '@/features/contracts/components/contract-filter-modal';
import ContractsTableCard from '@/features/contracts/components/contract-table-card';
import { useContractSettings } from '@/features/contracts/hook/use-contracts';
import type { ContractItem } from '@/features/contracts/type';
import { meal } from '@/features/food/components/data';
import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';
import type { Option } from '@/components/shared/type';


export default function ContractsPage() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const { data , isLoading } = useContractSettings(page);

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState<Option[]>([]);

  const list = useMemo(() => data?.contracts ?? [], [data]);
  const meta = data?.meta;


  const contracts: ContractItem[] = useMemo(() => {
    return list.map((item) => {
      const isOrganization = item.type === 'organization';
      const source = isOrganization && item.parent ? item.parent : item;

      const fullName =
        `${source.first_name ?? ''} ${source.last_name ?? ''}`.trim() || '-';

      return {
        id: item.id,
        name: fullName,
        branches: item.type === 'personal' ? '-' : item.parent ? `${item.first_name ?? ''} ${item.last_name ?? ''}`.trim()  : '-',

        representative: fullName,
        representative_number: item.phone ?? '-',
        meals: item.meals?.length ? item.meals : ['ثبت نشده'],
        status: item.is_active ? 'فعال' : 'غیرفعال',
      };
    });
  }, [list]);

  
  const pagination = useMemo(() => {
    if (!meta) return undefined;

    return {
      currentPage: meta.current_page,
      totalPages: meta.last_page,
      onPageChange: (newPage: number) => setPage(newPage),
    };
  }, [meta]);

  const handleEdit = (row: ContractItem) => {
    navigate(`/contracts/edit/${row.id}`);
  };

  if (!isLoading && !contracts.length) {
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
  return (
    <>
      <ContractsTableCard
        data={contracts}
        onEdit={handleEdit}
        onOpenFilter={() => setOpenFilterModal(true)}
        pagination={pagination}
        isLoading={isLoading}
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