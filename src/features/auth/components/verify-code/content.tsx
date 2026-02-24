import Image from '@/components/shared/image';
import VerifyCodeForm from '@/features/auth/components/verify-code/form';

function maskPhone(phone?: string | null) {
  if (!phone || phone.length < 8) return phone;
  return `${phone.slice(-2)}*****${phone.slice(0, 4)}`;
}

export default function VerifyCodePageContent() {
  const maskedPhone = maskPhone(sessionStorage.getItem('forgetUsernamePhone'));
  const pageTitle =
    sessionStorage.getItem('verifyCodeTitle') || 'بازیابی نام کاربری';

  return (
    <div className='xl:col-span-7 col-span-12 max-w-[500px] mx-auto'>
      <div className="flex flex-col justify-between gap-7xl 2xl:pt-[140px] xl:pt-[600px] pt-[200px]">
        <div className="flex flex-col items-center justify-center gap-6xl">
          <Image
            src="/assets/images/Logo.webp"
            alt="Login"
            objectFit="cover"
            loading="eager"
            placeholderColor="bg-gray-200 dark:bg-gray-700"
            onError={() => console.log('Image error')}
            onLoad={() => console.log('Image loaded')}
            className="w-[137px] h-6xl mx-auto"
            size="full"
          />
          <div className="flex flex-col items-center justify-center gap-2xl">
            <h2 className="text-rtext-primary-900 text-3xl font-semibold leading-11">
              {pageTitle}
            </h2>
            <p className="text-rtext-tertiary-600">
              یک کد ۴ رقمی به شماره موبایل
              {maskedPhone} ارسال شد. لطفاً آن را وارد کنید.
            </p>
          </div>
        </div>
        <VerifyCodeForm />
      </div>
    </div>
  );
}
