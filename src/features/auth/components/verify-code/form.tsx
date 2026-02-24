import OTPInput from '@/components/shared/otp-input';
import type { VerifyCodeFormValues } from '@/features/auth/type';
import { verifyCodeValidationSchema } from '@/features/auth/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button } from 'rg-dst';

export default function VerifyCodeForm() {
  const pageTitle =
    sessionStorage.getItem('verifyCodeTitle') || 'بازیابی نام کاربری';

  // Determine the back route based on where user came from
  const backRoute =
    pageTitle === 'فراموشی رمز عبور'
      ? '/auth/forgot-password'
      : '/auth/forgot-username';
  const isForgotPassword = pageTitle === 'فراموشی رمز عبور';

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyCodeFormValues>({
    resolver: yupResolver(verifyCodeValidationSchema),
    mode: 'onChange',
    defaultValues: {
      code: '',
    },
  });

  const onSubmit = async (data: VerifyCodeFormValues) => {
    // TODO: Add API call when available
    console.log('Verify code data:', data);

    // Navigate to new-password page if it's forgot password flow
    if (isForgotPassword) {
      // Navigate to new-password page
      // navigate('/auth/new-password');
    }
  };

  const stepsCount = isForgotPassword ? 3 : 2;
  const activeStep = stepsCount;

  return (
    <div className="flex flex-col justify-between items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4xl max-w-[500px] mx-auto w-full"
      >
        <div className="flex flex-col gap-3xl w-[270px] mx-auto">
          <Controller
            name="code"
            control={control}
            render={({ field: { onChange, value } }) => (
              <OTPInput
                length={4}
                value={value || ''}
                onChange={onChange}
                error={errors.code?.message}
              />
            )}
          />
          <div className="flex items-center gap-md">
            <Link
              to={backRoute}
              className="text-gray-light-600 text-sm font-semibold"
            >
              تغییر شماره موبایل
            </Link>
            <span className="text-rtext-tertiary-600">/</span>
            <p className="text-rtext-tertiary-600 text-sm">
              ارسال مجدد کد تا ۰۱:۳۰
            </p>
          </div>
        </div>
        <Button
          type="submit"
          variant="primary"
          fullWidth
          loading={isSubmitting}
          className="bg-rbg-brand-solid"
        >
          تایید
        </Button>
      </form>
      <div className="flex items-center gap-lg mt-[350px] max-w-[500px] mx-auto w-full">
        {Array.from({ length: stepsCount }).map((_, index) => (
          <div
            key={index}
            className={`w-[244px] h-md rounded-full ${index === (isForgotPassword ? activeStep - 2 : activeStep - 1)
              ? 'bg-utility-brand-600'
              : 'bg-gray-light-200'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
