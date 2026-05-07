'use client';

import { useEffect, useMemo, useState } from 'react';
import ContractMenusCard from '@/features/contracts/components/contract-menu-card';
import { MealCard } from '@/features/contracts/components/meal-card';
import { MealLimitsCard } from '@/features/contracts/components/meal-limits-card';
import SidebarInfoPanel from '@/features/contracts/components/sidebar-info-panel';
import { TabsWithBadges } from '@/features/contracts/components/tab-with-badge';
import { useContractSettingsCustomer } from '@/features/contracts/hook/use-contracts';
import type { TabItem } from '@/features/contracts/type';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Button } from 'rg-dst';
import { useToggleCards } from '@/hooks/use-toggle-card';


const tabs: TabItem[] = [
  { label: 'صبحانه', value: 'breakfast' },
  { label: 'ناهار', value: 'lunch' },
  { label: 'شام', value: 'dinner' },
];

type FormValues = {
  mealTime: string;
  orderCount: number;
  variety: number;
  driverId: string;
  kitchenNote: string;
  minOrder: number;
  maxOrder: number;
  editTolerance: number;
  menus: string[];
};

const emptyForm: FormValues = {
  mealTime: '',
  orderCount: 0,
  variety: 0,
  driverId: '',
  kitchenNote: '',
  minOrder: 0,
  maxOrder: 0,
  editTolerance: 0,
  menus: [],
};

export default function EditContract() {
  const { id } = useParams<{ id: string }>();

  const { data } = useContractSettingsCustomer(id);

  const [activeTab, setActiveTab] = useState('breakfast');

  const methods = useForm<FormValues>({
    defaultValues: emptyForm,
  });

  const { handleSubmit, reset } = methods;

  const { openStates, toggle } = useToggleCards({
    customer: false,
    branch: false,
  });

 
const customer = data?.data?.customer;
const isBranch = data?.data?.is_branch;
 
  const userSource = useMemo(() => {
    if (!customer) return null;

    return isBranch ? customer.parent : customer;
  }, [customer, isBranch]);

  // -----------------------------
  // فرم
  // -----------------------------
  useEffect(() => {
    if (!data) return;

    reset({
      mealTime: data?.mealTime ?? '',
      orderCount: data?.orderCount ?? 0,
      variety: data?.variety ?? 0,
      driverId: data?.driverId ?? '',
      kitchenNote: data?.kitchenNote ?? '',
      minOrder: data?.minOrder ?? 0,
      maxOrder: data?.maxOrder ?? 0,
      editTolerance: data?.editTolerance ?? 0,
      menus: data?.menus ?? [],
    });
  }, [data, reset]);


  const userFakeData = useMemo(() => {
    if (!userSource) return [];

    return [
      {
        label: 'نام مشتری',
        value: `${userSource.first_name ?? '-'} ${userSource.last_name ?? '-'}`,
      },
      { label: 'شماره موبایل', value: userSource.phone ?? '-' },
      { label: 'تلفن ثابت', value: userSource.landline_number ?? '-' },
      { label: 'شناسه ملی', value: userSource.identification_code ?? '-' },
      { label: 'کد اقتصادی', value: userSource.economic_code ?? '-' },
      { label: 'شناسه مشتری', value: userSource.id ?? '-' },
      { label: 'شهر', value: userSource.city?.name ?? '-' },
      { label: 'استان', value: userSource.province ?? '-' },
      { label: 'آدرس', value: userSource.address ?? '-' },
    ];
  }, [userSource]);

  const branchFakeData = useMemo(() => {
    if (!isBranch || !customer) return [];

    return [
      {
        label: 'نام نماینده',
        value: `${customer.first_name ?? '-'} ${customer.last_name ?? '-'}`,
      },
      { label: 'شماره تماس', value: customer.phone ?? '-' },
      { label: 'تلفن ثابت', value: customer.landline_number ?? '-' },
      { label: 'شهر', value: customer.city?.name ?? '-' },
      { label: 'استان', value: customer.province ?? '-' },

      { label: 'آدرس', value: customer.address ?? '-' },
    ];
  }, [customer, isBranch]);

  const onSubmit = (formData: FormValues) => {
    console.log('TAB:', activeTab);
    console.log('FORM:', formData);
  };

  if (!data || !customer) {
    return <div className="p-6">در حال بارگذاری...</div>;
  }

  return (
    <div className="grid grid-cols-12 gap-3xl">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-span-9 flex flex-col gap-3xl p-7"
        >
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

          <Button type="submit" className="mr-auto bg-utility-brand-600">
            ثبت تنظیمات
          </Button>
        </form>
      </FormProvider>

      <SidebarInfoPanel
        openStates={openStates}
        toggle={toggle}
        userData={userFakeData}
        branchData={branchFakeData}
        customerType={customer?.type}
      />
    </div>
  );
}