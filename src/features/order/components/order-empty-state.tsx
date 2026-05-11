import Image from '@/components/shared/image';

export default function OrderEmptyState() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3xl">
        <Image
          src="/assets/images/Empty-meal.webp"
          alt="Empty-meal"
          width={110}
          height={110}
        />

        <div className="flex flex-col gap-md text-center">
          <p className="text-xl font-medium text-gray-light-700">
            برای نمایش اطلاعات سفارش یک سفارش را انتخاب کنید
          </p>

          <p className="text-md text-gray-light-500">
            میتوانید از طریق سایدبار سمت راست یکی از سفارش‌ها را انتخاب کنید
          </p>
        </div>
      </div>
    </div>
  );
}
