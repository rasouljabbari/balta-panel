import { useMemo, useState } from 'react';
import { useDrivers } from '@/features/drivers/hook/drivers';
import { TruckIcon } from '@/components/icons';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import type { deriverModalProps } from '../types';


export default function DeriverModal({ isOpen, onClose }: deriverModalProps) {
  const [driverSearch, setDriverSearch] = useState('');

  const [selectedDriver, setSelectedDriver] = useState<{
    label: string;
    value: number;
  } | null>(null);

  const { data: driversData, isLoading } = useDrivers({
    page: 1,
    name: driverSearch,
  });

  const driverOptions = useMemo(() => {
    if (!driversData?.drivers) return [];

    return driversData.drivers
      .filter((driver: any) => driver.is_active)
      .map((driver: any) => ({
        label: `${driver.first_name} ${driver.last_name}`,
        value: driver.id,
      }));
  }, [driversData]);

  return (
    <SharedModal
      isOpen={isOpen}
      onClose={() => {
        setSelectedDriver(null);
        setDriverSearch('');
        onClose();
      }}
      title="انتخاب راننده"
      confirmText="تایید راننده"
      cancelText="انصراف"
      icon={<TruckIcon width={24} height={24} stroke="#667085" />}
      iconBgClass="bg-gray-light-100"
    >
      <div className="flex flex-col gap-2xl">
        <p className="text-sm text-gray-light-600">
          جهت تخصیص سفارش، راننده مورد نظر خود را از لیست رانندگان فعال انتخاب
          نمایید.
        </p>

        <CustomSelect
          options={driverOptions}
          value={selectedDriver}
          onChange={(option: any) => setSelectedDriver(option)}
          onInputChange={setDriverSearch}
          placeholder={
            isLoading ? 'در حال دریافت راننده‌ها...' : ' انتخاب کنید'
          }
        />
      </div>
    </SharedModal>
  );
}