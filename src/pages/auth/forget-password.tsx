import Image from '@/components/shared/image';
import ForgetPasswordPageContent from '@/features/auth/components/forget-password/content';

export default function ForgetPasswordPage() {
  return (
    <div className="h-screen grid grid-cols-12 overflow-hidden">
      <ForgetPasswordPageContent />
      <div className="hidden lg:block lg:col-span-5 h-full overflow-hidden p-5xl ps-0">
        <Image
          src="/assets/images/splash.webp"
          alt="Login"
          objectFit="cover"
          loading="eager"
          placeholderColor="bg-gray-200 dark:bg-gray-700"
          onError={() => console.log('Image error')}
          onLoad={() => console.log('Image loaded')}
          className="w-full h-full rounded-4xl"
          size="full"
        />
      </div>
    </div>
  );
}
