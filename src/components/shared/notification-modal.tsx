import { BellIcon } from 'lucide-react';
import { createPortal } from 'react-dom';
import { Button } from 'rg-dst';
import { useAnimatedModal } from '@/hooks/use-animated-modal';
import type { NotificationModalProps } from '@/components/shared/type';

export default function NotificationModal({
  isOpen,
  onClose,
  notifications,
  onReadAll,
}: NotificationModalProps) {
  const { visible, showPortal, handleTransitionEnd } = useAnimatedModal(isOpen);

  if (!notifications.length) return null;

  if (!showPortal) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-end"
      onTransitionEnd={handleTransitionEnd}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative mt-[73px] ml-7 w-[638px] rounded-xl bg-white shadow-xl border border-gray-light-200
        transform transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
        `}
      >
        <div className="flex flex-col gap-xl p-xl">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-xl">
              <div className="border border-gray-light-300 w-10 h-10 flex items-center justify-center rounded-md">
                <BellIcon size={20} color="#667085" />
              </div>
              <h3 className="text-lg font-semibold text-gray-light-900">
                اعلان‌ها
              </h3>
            </div>

            <Button
              variant="linkGray"
              className="bg-white text-gray-light-600 hover:bg-white border-none text-sm font-semibold"
              //   leftIcon={<SeenIcon />}
              onClick={onReadAll}
            >
              خواندن همه
            </Button>
          </div>

          <hr className="border-gray-light-200" />

          {/* List */}
          <div className="flex flex-col gap-xl">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-lg border border-gray-light-200 rounded-md"
              >
                <div className="flex items-center gap-lg">
                  <div className="w-2 h-2 bg-utility-brand-500 rounded-full" />
                  <p className="text-sm text-gray-light-600">{item.text}</p>
                </div>

                <span className="text-xs text-gray-light-500"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
