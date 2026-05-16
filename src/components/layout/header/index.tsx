import HeaderNotificationBox from '@/components/layout/header/header-notification-box';
import type { HeaderProps } from '@/components/layout/header/type';
import SharedModal from '@/components/shared/custom-modal';
import {
  useDriverById,
  useToggleDriverStatus,
} from '@/features/drivers/hook/drivers';
import { useState } from 'react';
import HeaderAction from './header-action';
import HeaderUserInformationBox from './header-info';
import { useHeaderInfo } from './hook/use-header-info';

export default function Header({
  onMenuClick,
  actionButton,
  extra,
  driverId,
}: HeaderProps & { driverId?: number }) {
  const { data: apiDriver } = useDriverById(driverId);
  

  const { title, description, showBackButton, isDriverEdit, isDriverDetail } =
    useHeaderInfo();

  const toggleDriverStatus = useToggleDriverStatus();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingDriverId, setPendingDriverId] = useState<number | null>(null);
  const [isPending, setIsPending] = useState(false);

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
