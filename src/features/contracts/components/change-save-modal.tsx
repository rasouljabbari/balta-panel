import SharedModal from '@/components/shared/custom-modal';

type ChangeSaveModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  mealLabel?: string;
};

export default function ChangeSaveModal({
  isOpen,
  onClose,
  onConfirm,
  mealLabel = 'این وعده',
}: ChangeSaveModalProps) {
  return (
    <SharedModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title="تغییرات شما هنوز ذخیره نشده"
      cancelText="انصراف"
      confirmText="حذف و ادامه"
    >
      <p className="text-sm leading-7 text-gray-light-600">
        به نظر می‌رسد تغییرات وعده «{mealLabel}» هنوز ثبت نشده‌اند.
        <br />
        برای جلوگیری از از دست رفتن اطلاعات، ابتدا تنظیمات را ذخیره کرده و سپس
        وارد بخش جدید شوید.
      </p>
    </SharedModal>
  );
}
