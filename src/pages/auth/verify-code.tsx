import Image from '@/components/shared/image';
import VerifyCodePageContent from '@/features/auth/components/verify-code/content';

export default function VerifyCodePage() {
  return (
    <div className="h-screen grid grid-cols-12 overflow-hidden">
      <VerifyCodePageContent />
      <div className="hidden lg:block lg:col-span-5 h-full overflow-hidden p-5xl ps-0">
        <Image
          src="/assets/images/login.webp"
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
