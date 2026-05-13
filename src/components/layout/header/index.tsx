import { useState } from 'react';
import { useContractSettingsCustomer } from '@/features/contracts/hook/use-contracts';
import { useDriverById, useToggleDriverStatus } from '@/features/drivers/hook/drivers';
import HeaderNotificationBox from '@/components/layout/header/header-notification-box';
import type { HeaderProps } from '@/components/layout/header/type';
import SharedModal from '@/components/shared/custom-modal';
import HeaderAction from './header-action';
import HeaderUserInformationBox from './header-info';
import { useHeaderInfo } from './hook/use-header-info';
import DatePickerField from '@/components/shared/date-picker-filed';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import DateObject from 'react-date-object';
import gregorian from 'react-date-object/calendars/gregorian';
import persian from 'react-date-object/calendars/persian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import persian_fa from 'react-date-object/locales/persian_fa';
import { convertPersianToGregorian } from '@/utils/convert-persian-to-gregorian';


export default function Header({
  onMenuClick,
  actionButton,
  extra,
  driverId,
  contractId,
  hasDatePicker,
}: HeaderProps & { driverId?: number }) {
  const { data: apiDriver } = useDriverById(driverId);
  const { data: contractData } = useContractSettingsCustomer(contractId);
  const [searchParams, setSearchParams] = useSearchParams();

  const { title, description, showBackButton, isDriverEdit, isDriverDetail } =
    useHeaderInfo();

  const toggleDriverStatus = useToggleDriverStatus();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingDriverId, setPendingDriverId] = useState<number | null>(null);
  const [isPending, setIsPending] = useState(false);

  const todayGregorian = useMemo(() => {
    return new DateObject({
      calendar: persian,
      locale: persian_fa,
    })
      .convert(gregorian)
      .setLocale(gregorian_en)
      .format('YYYY-MM-DD');
  }, []);

  const urlDate = searchParams.get('date') || '';

  // Ensure date param exists on exceptions page (so list loads immediately)
  useEffect(() => {
    if (!hasDatePicker) return;
    if (urlDate) return;

    const next = new URLSearchParams(searchParams);
    next.set('date', todayGregorian);
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasDatePicker, urlDate, todayGregorian]);

  const dateValue = useMemo(() => {
    if (!hasDatePicker) return null;
    const dateStr = urlDate || todayGregorian;

    // URL is stored as Gregorian YYYY-MM-DD; UI shows Persian calendar.
    return new DateObject({
      date: dateStr,
      calendar: gregorian,
      locale: gregorian_en,
    })
      .convert(persian)
      .setLocale(persian_fa);
  }, [hasDatePicker, urlDate, todayGregorian]);

  const handleDateChange = (val: DateObject | null) => {
    if (!val) return;
    const greg = convertPersianToGregorian(val as any);
    if (!greg) return;

    const next = new URLSearchParams(searchParams);
    next.set('date', greg);
    setSearchParams(next, { replace: true });
  };

  // Toggle Status
  const handleToggleClick = () => {
    if (!apiDriver) return;

    setPendingDriverId(apiDriver.id);
    setIsModalOpen(true);
  };

  const handleConfirmToggle = () => {
    if (!pendingDriverId) return;

    setIsPending(true);

    toggleDriverStatus.mutate(pendingDriverId, {
      onSuccess: () => {
        setIsPending(false);
        setIsModalOpen(false);
        setPendingDriverId(null);
      },
      onError: () => {
        setIsPending(false);
      },
    });
  };
  // ========================
  // FINAL TITLE
  // ========================

  let finalTitle = title;
  let finalDescription = description;

  if (apiDriver) {
    const fullName = `${apiDriver.first_name} ${apiDriver.last_name}`;

    if (isDriverEdit) {
      finalTitle = `ویرایش اطلاعات ${fullName}`;
    } else {
      finalTitle = fullName;
    }

    finalDescription = `شناسه راننده: ${apiDriver.user_code ?? '-'}`;
  }

if (contractData?.data?.customer) {
  const customer = contractData.data.customer;


  if (customer.parent) {
    finalTitle = `${customer.parent.first_name} ${customer.parent.last_name}`;

    finalDescription = `شعبه ${customer.first_name} ${customer.last_name}`;
  }

  else {
    finalTitle = `${customer.first_name} ${customer.last_name}`;

    finalDescription = undefined;
  }
}
  return (
    <>
      <header className="bg-white py-4 px-4 lg:py-5 lg:px-8 border-b border-gray-light-300 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden flex items-center justify-center p-2 hover:bg-gray-light-100 rounded-lg transition-colors"
          />

          <HeaderUserInformationBox
            title={finalTitle}
            description={finalDescription}
            showBackButton={showBackButton}
          />
        </div>

        <div className="flex items-center gap-lg">
          <HeaderAction
            isDriverEdit={isDriverEdit}
            isDriverDetail={isDriverDetail}
            extra={extra}
            actionButton={!apiDriver ? actionButton : undefined}
            initialStatus={apiDriver?.is_active || false}
            onStatusToggle={handleToggleClick}
          />

        {hasDatePicker &&
          <DatePickerField
            defaultToToday
            onChange={handleDateChange}
            value={dateValue}
            iconOnRight={true}
            allowFuture
          />
        }

          <HeaderNotificationBox />
        </div>
      </header>

      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="تغییر وضعیت راننده"
        confirmText="تایید"
        cancelText="انصراف"
        onConfirm={handleConfirmToggle}
        showFooter={true}
        isPending={isPending}
      >
        <p className="text-gray-light-600">
          آیا از فعال/غیرفعال کردن این راننده مطمئن هستید؟
        </p>
      </SharedModal>
    </>
  );
}