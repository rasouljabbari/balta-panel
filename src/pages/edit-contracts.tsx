import { useState } from 'react';
import ContractMenusCard from '@/features/contracts/components/contract-menu-card';
import { MealCard } from '@/features/contracts/components/meal-card';
import { MealLimitsCard } from '@/features/contracts/components/meal-limits-card';
import { TabsWithBadges } from '@/features/contracts/components/tab-with-badge';
import type { TabItem } from '@/features/contracts/type';
import { Button } from 'rg-dst';
import { useToggleCards } from '@/hooks/use-toggle-card';
import SidebarInfoPanel from '@/features/contracts/components/sidebar-info-panel';


const tabs: TabItem[] = [
  { label: 'صبحانه', value: 'breakfast' },
  { label: 'ناهار', value: 'lunch' },
  { label: 'شام', value: 'dinner' },
];

export default function EditContract() {
  const [activeTab, setActiveTab] = useState<string>('breakfast');
  const { openStates, toggle } = useToggleCards({
    customer: false,
    branch: false,
  });

  const userFakeData = [
    { label: 'نام مشتری', value: 'شرکت راهکارگستران' },
    { label: 'نام کسب و کار', value: 'راهکار گستران' },
    { label: 'نام کارشناس', value: 'سینا آقایی' },
    { label: 'شماره تماس', value: '۳۳۳۴۵۴۶۵' },
    { label: 'شناسه ملی', value: '۹۶۷۷۵۷۶۵۴' },
    { label: 'کد اقتصادی', value: '۸۳۷۳۰۴۸۴۳' },
    { label: 'کد مشتری', value: '۱۲۳۴۵' },
    { label: 'استان', value: 'تبریز' },
    { label: 'شهر', value: '۱۴۰۰/۰۲/۰۲' },
    { label: 'آدرس', value: 'خیابان شهیدبهشتی٬ جنب بانک صادرات٬ساختمان..' },
  ];

  const branchFakeData = [
    { label: 'نام شعبه', value: 'آبرسان' },
    { label: 'نام نماینده', value: 'محسن رضایی' },
    { label: 'شماره موبایل نماینده', value: '۰۹۹۹۶۱۹۲۷۰۱' },
    { label: 'تلفن ثابت', value: '۰۴۵۳۳۶۳۴۷۴۲' },
    { label: 'آدرس', value: 'تبریز، چهارراه منصور ، ساختمان پرنیان ورودی ۱' },
  ];

  return (
    <div className="grid grid-cols-12 gap-3xl">
      <div className="col-span-9 flex flex-col gap-3xl p-7">
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
        <Button className="mr-auto bg-utility-brand-600">ثبت تنظیمات</Button>
      </div>

      <SidebarInfoPanel
        openStates={openStates}
        toggle={toggle}
        userData={userFakeData}
        branchData={branchFakeData}
      />
    </div>
  );
}