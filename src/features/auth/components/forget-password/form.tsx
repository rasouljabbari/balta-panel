import type { ForgotPasswordFormValues } from '@/features/auth/type';
import { forgotPasswordValidationSchema } from '@/features/auth/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from 'rg-dst';

export default function ForgetPasswordForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(forgotPasswordValidationSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    // Save phone number to sessionStorage
    sessionStorage.setItem('forgetUsernamePhone', data.phone);
    // Save page title to sessionStorage
    sessionStorage.setItem('verifyCodeTitle', 'فراموشی رمز عبور');

    // Navigate to verify-code page
    navigate('/auth/verify-code');
  };

  const stepsCount = 3;
  const activeStep = 1;

  return (
    <div className="flex flex-col justify-between items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4xl max-w-[500px] mx-auto w-full"
      >
        <Input
          {...register('phone')}
          label="شماره موبایل"
          placeholder="شماره موبایل خود را وارد کنید"
          className="w-full placeholder:text-rtext-placeholder"
          destructive={errors.phone?.message}
          destructiveText={errors.phone?.message}
          required
        />

        <div className="flex flex-col gap-3xl items-center">
          <Button
            type="submit"
            variant="primary"
            fullWidth
            loading={isSubmitting}
            className="bg-rbg-brand-solid"
          >
            ارسال کد تایید
          </Button>

          <Link
            to="/auth/login"
            className="text-gray-light-600 text-sm font-semibold"
          >
            بازگشت به صفحه ورود
          </Link>
        </div>
      </form>
      <div className="flex items-center gap-lg mt-[330px] max-w-[500px] mx-auto w-full">
        {Array.from({ length: stepsCount }).map((_, index) => (
          <div
            key={index}
            className={`w-[244px] h-md rounded-full ${
              index === activeStep - 1
                ? 'bg-utility-brand-600'
                : 'bg-gray-light-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}


