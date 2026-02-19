import { useState } from 'react';
import ContractMenusCard from '@/features/contracts/components/contract-menu-card';
import { MealCard } from '@/features/contracts/components/meal-card';
import { MealLimitsCard } from '@/features/contracts/components/meal-limits-card';
import { TabsWithBadges } from '@/features/contracts/components/tab-with-badge';
import type { TabItem } from '@/features/contracts/type';
import { Button } from 'rg-dst';


const tabs: TabItem[] = [
  { label: 'صبحانه', value: 'breakfast' },
  { label: 'ناهار', value: 'lunch' },
  { label: 'شام', value: 'dinner' },
];

export default function EditContract() {
  const [activeTab, setActiveTab] = useState<string>('breakfast');

  return (
    <div className="grid grid-cols-12 gap-3xl">
      <div className="col-span-9 flex flex-col gap-3xl">
        <TabsWithBadges
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <MealCard />
        <div className="grid grid-cols-9 gap-3xl">
          <MealLimitsCard />
          <ContractMenusCard />
        </div>
        <Button className="mr-auto">ثبت تنظیمات</Button>
      </div>
    </div>
  );
}