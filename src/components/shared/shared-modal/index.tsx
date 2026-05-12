import { createPortal } from 'react-dom';
import { Button } from 'rg-dst';
import { useAnimatedModal } from '@/hooks/use-animated-modal';
import { InfoCircleIcon } from '@/components/icons/order-icons';
import type { SharedModalProps } from '@/components/shared/type';

export default function SharedModal({
  isOpen,
  onClose,
  title,
  icon = <InfoCircleIcon width={24} height={24} className="text-warning-600" />,
  children,
  cancelText = 'انصراف',
  confirmText = 'تأیید',
  onConfirm,
  confirmDisabled = false,
  showConfirmButton = true,
  confirmButtonType = 'button',
  widthClass = 'w-[544px]',
  iconBgClass = 'bg-warning-100',
}: SharedModalProps) {
  const { visible, showPortal, handleTransitionEnd } = useAnimatedModal(isOpen);

  if (!showPortal) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onTransitionEnd={handleTransitionEnd}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative z-10 rounded-xl bg-white shadow-xl ${widthClass}
        transform transition-all duration-300
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {/* HEADER */}
        <div className="flex items-center p-3xl gap-xl border-b border-gray-light-200">
          {icon && (
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full ${iconBgClass}`}
            >
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-gray-light-900">{title}</h3>
        </div>

        {/* BODY */}
        <div className="p-3xl">{children}</div>

        {/* FOOTER */}
        <div className="p-3xl border-t border-gray-light-200">
          <div className="flex gap-xl items-end justify-end">
            <Button
              type="button"
              className="bg-base-white text-[#344054] border border-gray-light-300 hover:bg-base-white p-[10px] px-xl"
              onClick={onClose}
            >
              {cancelText}
            </Button>

            {showConfirmButton && (
              <Button
                type={confirmButtonType}
                className="p-[10px] px-xl bg-utility-brand-600 hover:bg-utility-brand-700 text-base-white w-11xl!"
                onClick={confirmButtonType === 'button' ? onConfirm : undefined}
                disabled={confirmDisabled}
              >
                {confirmText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
