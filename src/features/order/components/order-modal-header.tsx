import { useState } from 'react';
import type { OrderModalHeaderProps } from '@/features/order/types';
import { X } from 'lucide-react';
import SharedModal from '@/components/shared/shared-modal';


export default function OrderModalHeader({ mealType, formattedDate, onClose }: OrderModalHeaderProps) {

  const [closeModal, setCloseModal] = useState(false);
  return (
    <>
      <div className="px-6 flex items-center justify-between py-4">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">ثبت غذا</span>
          <span className="text-gray-light-500 text-md">
            ثبت غذای وعده {mealType} - {formattedDate}
          </span>
        </div>

        <button
          onClick={() => setCloseModal(true)}
          className="text-gray-500 hover:text-gray-700 text-lg border border-gray-light-300 h-10 w-10 rounded-md flex justify-center items-center"
        >
          <X size={20}  className='text-gray-light-500'/>
        </button>
      </div>
      <SharedModal
        onClose={onClose}
        isOpen={closeModal}
        title="تغییرات ثبت نشده است!"
        cancelText="عدم ثبت"
        confirmText="ثبت غذا"
        onConfirm={() => onClose()}
      >
        <p className="text-gray-light-600">
          سفارش شما برای این وعده غذایی ذخیره نشده است. آیا مایل به ادامه
          هستید؟
        </p>
      </SharedModal>
    </>
  );
}