import { PasswordFields } from '@/features/auth/components/new-password/new-password-fields';
import type { NewPasswordFormValues } from '@/features/auth/type';
import { newPasswordValidationSchema } from '@/features/auth/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from 'rg-dst';

export default function NewPasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<NewPasswordFormValues>({
    resolver: yupResolver(newPasswordValidationSchema),
    mode: 'onChange',
  });

  const { element, isValidPassword } = PasswordFields<NewPasswordFormValues>({
    register,
    errors,
    watch,
  });

  const onSubmit = async (data: NewPasswordFormValues) => {
    console.log('New password data:', data);
  };

  const stepsCount = 3;
  const activeStep = 3;

  return (
    <div className="flex flex-col justify-between items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4xl max-w-[500px] mx-auto w-full"
      >
        {/* inputs + rules */}
        {element}

        {/* Button بیرون */}
        <Button
          type="submit"
          fullWidth
          loading={isSubmitting}
          disabled={!isValidPassword}
          className="bg-rbg-brand-solid"
        >
          تغییر رمز عبور
        </Button>
      </form>

      {/* Steps */}
      <div className="flex items-center gap-lg mt-[165px] max-w-[500px] mx-auto w-full">
        {Array.from({ length: stepsCount }).map((_, index) => (
          <div
            key={index}
            className={`w-[244px] h-md rounded-full ${index === activeStep - 1
              ? 'bg-utility-brand-600'
              : 'bg-gray-light-200'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
