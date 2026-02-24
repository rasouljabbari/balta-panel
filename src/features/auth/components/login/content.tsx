import Image from "@/components/shared/image";
import LoginForm from "@/features/auth/components/login/form";

export default function LoginPageContent() {

  return (
    <div className='p-8 xl:col-span-7 col-span-12'>
      <div className="flex flex-col justify-between gap-7xl 2xl:pt-[140px] xl:pt-[600px] pt-[200px]">
        <div className=" flex flex-col items-center justify-center gap-6xl ">
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
          <div className="flex flex-col gap-2xl items-center">
            <h1 className="text-rtext-primary-900 text-display-sm font-semibold leading-7.5">
              ورود به حساب کاربری
            </h1>
            <p className="text-rtext-tertiary-600 text-base font-normal leading-6">
              جهت دسترسی به پنل مدیریتی و مدیریت فرآیندها، وارد حساب کاربری شوید.
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}