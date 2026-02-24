import Image from '@/components/shared/image';
import LoginPageContent from '@/features/auth/components/login/content';

export default function Login() {
  // useDisableScroll();

  return (
    <div className="h-screen grid grid-cols-12">
      <LoginPageContent />
      <div className="hidden lg:block xl:col-span-5 col-span-12 h-full p-5xl ps-0">
        <Image
          src="/assets/images/login.webp"
          alt="Login"
          objectFit="cover"
          loading="eager"
          placeholderColor="bg-gray-200 dark:bg-gray-700"
          onError={() => console.log('Image error')}
          onLoad={() => console.log('Image loaded')}
          className="w-full max-h-[870px] h-full rounded-4xl"
          size="full"
        />
      </div>
    </div>
  );
}
