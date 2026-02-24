import ForgetPasswordForm from '@/features/auth/components/forget-password/form';
import Image from '@/components/ui/image';


export default function ForgetPasswordPageContent() {
  return (
    <div className='p-8 xl:col-span-7 col-span-12'>
      <div className="flex flex-col justify-between gap-7xl 2xl:pt-[140px] xl:pt-[600px] pt-[200px]">
        <div className="flex flex-col items-center justify-center gap-6xl">
          <Image
            src="/assets/images/logo.webp"
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
              فراموشی رمز عبور
            </h2>
            <p className="text-rtext-tertiary-600">
              برای بازنشانی رمز عبور، شماره موبایل خود را وارد کنید.
            </p>
          </div>
        </div>
        <ForgetPasswordForm />
      </div>
    </div>
  );
}