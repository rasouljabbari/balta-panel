import Image from '@/components/shared/image';
import NewPasswordForm from '@/features/auth/components/new-password/form';

export default function NewPasswordPageContent() {
  return (
    <div className='p-8 xl:col-span-7 col-span-12'>
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
              فراموشی رمز عبور
            </h2>
            <p className="text-rtext-tertiary-600">
              لطفاً رمز عبور جدید خود را وارد کرده و برای تأیید، دوباره تکرار
              کنید.
            </p>
          </div>
        </div>
        <NewPasswordForm />
      </div>
    </div>
  );
}
