import { useEffect, useState } from 'react';
import { BellIcon } from 'lucide-react';
import { Button } from 'dst-rg';
import NotificationModal from '@/components/shared/notification-modal';
import type { NotificationItem } from '@/components/shared/type';
import type { HeaderNotificationBoxProps } from './type';


const notifications: NotificationItem[] = [
  {
    id: 1,
    text: 'پاسخ تیکت ثبت‌شده شما با شماره ۳۱۲ توسط تیم پشتیبانی ارائه شد.',
    time: '۶ دقیقه پیش',
  },
  {
    id: 2,
    text: 'پاسخ تیکت شما با شماره ۳۱۲ ثبت شد.',
    time: '۶ دقیقه پیش',
  },
  {
    id: 3,
    text: 'رزرو غذای روز چهارشنبه با موفقیت ثبت گردید.',
    time: '۶ دقیقه پیش',
  },
  {
    id: 4,
    text: 'پاسخ تیکت شما با شماره ۳۰۰ ثبت شد.',
    time: '۶ دقیقه پیش',
  },
];

export default function HeaderNotificationBox({
  initialCount = 0,
}: HeaderNotificationBoxProps) {
  const [notificationCount, setNotificationCount] = useState(initialCount);
  const [openNotificationModal, setOpenNotificationModal] = useState(false);

  useEffect(() => {
    if (initialCount !== 0) return;

    const timer = setTimeout(() => {
      // mock API response later
      setNotificationCount(5);
    }, 0);

    return () => clearTimeout(timer);
  }, [initialCount]);

  return (
    <>
      <Button
        disabled={notificationCount === 0}
        onClick={() => setOpenNotificationModal(true)}
        variant="secondaryGray"
        className="relative !w-12 !h-12 p-0 bg-transparent !focus:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed !border !border-gray-light-300 rounded-lg !shadow-none"
      >
        {notificationCount > 0 && (
          <div className="absolute top-2 right-2 flex items-center justify-center">
            <div className="w-4 h-4 p-1 bg-brand-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-normal leading-6 text-gray-50">
                {notificationCount}
              </span>
            </div>
          </div>
        )}

        <div className="w-12 h-12 flex items-center justify-center">
          <BellIcon size={20} color="var(--color-gray-light-500)" />
        </div>
      </Button>
      <NotificationModal
        isOpen={openNotificationModal}
        onClose={() => setOpenNotificationModal(false)}
        notifications={notifications}
      />
    </>
  );
}