'use client';

import { useEffect, useMemo, useState } from 'react';
import ChangeSaveModal from '@/features/contracts/components/change-save-modal';
import ContractMenusCard from '@/features/contracts/components/contract-menu-card';
import { MealCard } from '@/features/contracts/components/meal-card';
import { MealLimitsCard } from '@/features/contracts/components/meal-limits-card';
import SidebarInfoPanel from '@/features/contracts/components/sidebar-info-panel';
import { TabsWithBadges } from '@/features/contracts/components/tab-with-badge';
import { useContractSettingsCustomer, useCreateContractSetting, useUpdateContractSetting } from '@/features/contracts/hook/use-contracts';
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

  driverId: number | null;

  kitchenNote: string;

  minOrder: number;
  maxOrder: number;

  editTolerance: number;

  isActive: boolean;

  menus: number[];
};

const emptyForm: FormValues = {
  mealTime: '',
  orderCount: 0,
  variety: 0,

  driverId: null,

  kitchenNote: '',

  minOrder: 0,
  maxOrder: 0,

  editTolerance: 0,

  isActive: false,

  menus: [],
};

export default function EditContract() {
  const { id } = useParams<{ id: string }>();

  const { data } = useContractSettingsCustomer(id);

  const { mutate: createMutate, isPending: isCreating } =
    useCreateContractSetting();

  const { mutate: updateMutate, isPending: isUpdating } =
    useUpdateContractSetting();

  const [activeTab, setActiveTab] = useState('breakfast');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nextTab, setNextTab] = useState<string | null>(null);

  const methods = useForm<FormValues>({
    defaultValues: emptyForm,
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty },
  } = methods;

  const { openStates, toggle } = useToggleCards({
    customer: false,
    branch: false,
  });

  const customer = data?.data?.customer;
  const isBranch = data?.data?.is_branch;

  const contract = useMemo(() => {
    return data?.data?.contract_settings?.find((c) => c.meal === activeTab);
  }, [data, activeTab]);

  const userSource = useMemo(() => {
    if (!customer) return null;

    return isBranch ? customer.parent : customer;
  }, [customer, isBranch]);

  useEffect(() => {
    if (!contract) {
      reset(emptyForm);
      return;
    }

    reset({
      mealTime: contract.delivery_time?.slice(0, 5) ?? '',
      orderCount: contract.count ?? 0,
      variety: contract.variety ?? 0,

      driverId: contract.default_driver ?? null,

      kitchenNote: contract.kitchen_description ?? '',

      minOrder: contract.initial_order_min_tolerance ?? 0,

      maxOrder: contract.initial_order_max_tolerance ?? 0,

      editTolerance: contract.daily_order_tolerance ?? 0,

      isActive: contract.is_active ?? false,

      menus: contract.menus?.map((m) => m.id) ?? [],
    });
  }, [contract, reset]);

 
  const handleTabChange = (value: string) => {
    if (value === activeTab) return;
    if (isDirty) {
      setNextTab(value);
      setIsModalOpen(true);
      return;
    }

    setActiveTab(value);
  };

  const handleConfirmChangeTab = () => {
    if (!nextTab) return;

    reset(emptyForm);

    setActiveTab(nextTab);

    setIsModalOpen(false);

    setNextTab(null);
  };

  const handleCancelChangeTab = () => {
    setIsModalOpen(false);
    setNextTab(null);
  };


const onSubmit = (formData: FormValues) => {
  if (!id || !formData.driverId) return;

  const payload = {
    meal: activeTab,
    delivery_time: formData.mealTime,
    count: formData.orderCount,
    variety: formData.variety,
    kitchen_description: formData.kitchenNote,
    default_driver: formData.driverId,
    is_active: formData.isActive,
    initial_order_max_tolerance: formData.maxOrder,
    initial_order_min_tolerance: formData.minOrder,
    daily_order_tolerance: formData.editTolerance,
    customer_id: id,
    menus: formData.menus,
  };

  const resetValues = {
    mealTime: formData.mealTime,
    orderCount: formData.orderCount,
    variety: formData.variety,

    driverId: formData.driverId,

    kitchenNote: formData.kitchenNote,

    minOrder: formData.minOrder,
    maxOrder: formData.maxOrder,

    editTolerance: formData.editTolerance,

    isActive: formData.isActive,

    menus: formData.menus,
  };

  if (contract?.id) {
    updateMutate(
      {
        id: contract.id,
        payload,
      },
      {
        onSuccess: () => {
          reset(resetValues);
        },
      },
    );
  } else {
    createMutate(payload, {
      onSuccess: () => {
        reset(resetValues);
      },
    });
  }
};

  const userData = useMemo(() => {
    if (!userSource) return [];

    return [
      {
        label: 'نام مشتری',
        value: `${userSource.first_name ?? '-'} ${userSource.last_name ?? '-'}`,
      },
      {
        label: 'شماره موبایل',
        value: userSource.phone ?? '-',
      },
      {
        label: 'تلفن ثابت',
        value: userSource.landline_number ?? '-',
      },
      {
        label: 'شناسه ملی',
        value: userSource.identification_code ?? '-',
      },
      {
        label: 'کد اقتصادی',
        value: userSource.economic_code ?? '-',
      },
      {
        label: 'شناسه مشتری',
        value: userSource.id ?? '-',
      },
      {
        label: 'شهر',
        value: userSource.city?.name ?? '-',
      },
      {
        label: 'استان',
        value: userSource.province ?? '-',
      },
      {
        label: 'آدرس',
        value: userSource.address ?? '-',
      },
    ];
  }, [userSource]);

  const branchData = useMemo(() => {
    if (!isBranch || !customer) return [];

    return [
      {
        label: 'نام نماینده',
        value: `${customer.first_name ?? '-'} ${customer.last_name ?? '-'}`,
      },
      {
        label: 'شماره تماس',
        value: customer.phone ?? '-',
      },
      {
        label: 'تلفن ثابت',
        value: customer.landline_number ?? '-',
      },
      {
        label: 'شهر',
        value: customer.city?.name ?? '-',
      },
      {
        label: 'استان',
        value: customer.province ?? '-',
      },
      {
        label: 'آدرس',
        value: customer.address ?? '-',
      },
    ];
  }, [customer, isBranch]);

  if (!data || !customer) {
    return <div className="p-6">در حال بارگذاری...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-3xl">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="col-span-9 flex flex-col gap-3xl p-7"
          >
            <TabsWithBadges
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={handleTabChange}
              contractSettings={data?.data?.contract_settings}
            />

            <MealCard />

            <div className="grid grid-cols-9 gap-3xl">
              <MealLimitsCard />
              <ContractMenusCard />
            </div>

            <Button
              type="submit"
              className="mr-auto bg-utility-brand-600"
              loading={isCreating || isUpdating}
            >
              ثبت تنظیمات
            </Button>
          </form>
        </FormProvider>

        <SidebarInfoPanel
          openStates={openStates}
          toggle={toggle}
          userData={userData}
          branchData={branchData}
          customerType={customer?.type}
        />
      </div>

      <ChangeSaveModal
        isOpen={isModalOpen}
        onClose={handleCancelChangeTab}
        onConfirm={handleConfirmChangeTab}
        mealLabel={
          tabs.find((t) => t.value === activeTab)?.label ??
          ''
        }
      />
    </>
  );
}