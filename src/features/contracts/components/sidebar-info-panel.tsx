import type { FC } from 'react';
import { User } from 'lucide-react';
import { BuildingIcon } from '@/components/icons/contract-icon';
import AccordionCard from '@/components/shared/accordion-card';
import DetailGrid from '@/components/shared/detail-grid';
import type { SidebarInfoPanelProps } from '../type';


const SidebarInfoPanel: FC<SidebarInfoPanelProps> = ({
  openStates,
  toggle,
  userData,
  branchData,
  customerType,
}) => {
    const isOrganization = customerType === 'organization';

  return (
    <div className="col-span-3 bg-gray-light-50 h-full w-[375px] border-r mr-auto border-gray-light-200 p-3xl flex flex-col gap-2xl">
      <AccordionCard
        title={isOrganization ? 'اطلاعات مشتری (حقوقی)' : 'اطلاعات مشتری (حقیقی)'}
        icon={<User size={20} color="var(--color-gray-light-500)" />}
        isOpen={openStates.customer}
        onToggle={() => toggle('customer')}
      >
        <DetailGrid items={userData} />
      </AccordionCard>
      {branchData?.length > 0 && (
        <AccordionCard
          title="اطلاعات شعبه"
          icon={<BuildingIcon />}
          isOpen={openStates.branch}
          onToggle={() => toggle('branch')}
        >
          <DetailGrid items={branchData} />
        </AccordionCard>
      )}
    </div>
  );
};

export default SidebarInfoPanel;