import ErrorsBox from '@/components/shared/errors-box';
import { useLogin } from '@/features/auth/hooks/use-login';
import type { LoginFormValues } from '@/features/auth/type';
import { loginValidationSchema } from '@/features/auth/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from 'dst-rg';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';


export default function LoginForm() {
  const { login, isPending, serverError, validationErrors } = useLogin();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginValidationSchema),
    mode: 'onChange',
  });

  // Apply validation errors from API to form fields
  useEffect(() => {
    validationErrors.forEach((validationError) => {
      const fieldName = validationError.field as keyof LoginFormValues;
      if (fieldName === 'identification_code' || fieldName === 'password') {
        setError(fieldName, {
          type: 'server',
          message: validationError.message,
        });
      }
    });
  }, [validationErrors, setError]);

  const onSubmit = async (data: LoginFormValues) => {
    await login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4xl max-w-[500px] mx-auto w-full"
    >
      <div className="flex flex-col gap-3xl">
        <Input
          {...register('identification_code')}
          label="کدملی"
          type="number"
          placeholder="کدملی را وارد کنید"
          destructive={errors.identification_code?.message}
          destructiveText={errors.identification_code?.message}
          required
          className="w-full placeholder:text-rtext-placeholder"
          aria-label="identification_code"
        />

        <Input
          {...register('password')}
          label="رمز عبور"
          type="password"
          placeholder="رمز عبور را وارد کنید"
          destructive={errors.password?.message}
          destructiveText={errors.password?.message}
          required
          autoComplete="current-password"
          className="w-full placeholder:text-rtext-placeholder"
          aria-label="password"
        />
      </div>

      {/* <Link to="/auth/forgot-password" className="text-gray-light-600 flex justify-center text-sm font-normal">
        فراموشی رمزعبور
      </Link> */}

      {
        validationErrors?.find(error => error.field === "username_or_password") &&
        <ErrorsBox errors={"رمزعبور یا کدملی وارد شده معتبر نمی باشد."} />
      }

      <ErrorsBox errors={serverError as string} />

      <Button
        type="submit"
        variant="primary"
        size="md"
        fullWidth
        loading={isSubmitting || isPending}
        className='bg-rbg-brand-solid mt-8'
        aria-label="submit-button"
      >
        ورود
      </Button>
    </form>
  );
}