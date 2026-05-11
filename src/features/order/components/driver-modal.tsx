import { TruckIcon } from '@/components/icons/order-icons';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';


type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DeriverModal({ isOpen, onClose }: Props) {
  return (
    <SharedModal
      isOpen={isOpen}
      onClose={onClose}
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
        <CustomSelect options={[]} placeholder="انتخاب کنید" />
      </div>
    </SharedModal>
  );
}