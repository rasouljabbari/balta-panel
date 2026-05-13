'use client';

import { useState } from 'react';
import SharedModal from '@/components/shared/custom-modal';
import OTPInput from '@/components/shared/otp-input';


type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CancelOrderModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<'confirm' | 'otp'>('confirm');
  const [otp, setOtp] = useState('');

  const handleClose = () => {
    setStep('confirm');
    setOtp('');
    onClose();
  };

  const handleConfirm = () => {
    if (step === 'confirm') {
      setStep('otp');
      return;
    }

    console.log('OTP CODE :', otp);

    // api call
    // cancel order api

    handleClose();
  };

  return (
    <SharedModal
      isOpen={isOpen}
      onClose={handleClose}
      title="لغو سفارش"
      cancelText="انصراف"
      confirmText={step === 'confirm' ? 'ارسال کد تایید' : 'لغو سفارش'}
      onConfirm={handleConfirm}
      confirmDisabled={step === 'otp' && otp.length < 4}
    >
      {step === 'confirm' ? (
        <div className="flex flex-col gap-xxs">
          <p className="text-gray-light-600">
            آیا از لغو این سفارش مطمئن هستید؟
          </p>

          <p className="text-gray-light-600">
            یک کد تأیید به شماره همراه آقای ۲۶*****۰۹۱۴ ارسال خواهد شد.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2xl">
          <p className='text-gray-light-600'>
            یک کد ۴ رقمی به شماره موبایل ۲۶*****۰۹۱۴ ارسال شد. لطفاً برای لغو
            سفارش آن را وارد کنید.
          </p>
          <OTPInput
            length={4}
            value={otp}
            onChange={setOtp}
            onComplete={(code) => {
              setOtp(code);
            }}
          />
        </div>
      )}
    </SharedModal>
  );
}