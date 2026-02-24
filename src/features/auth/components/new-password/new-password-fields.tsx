import type { PasswordFieldsProps } from '@/features/auth/type';
import { CircleCheckIcon } from 'lucide-react';
import type { FieldValues } from 'react-hook-form';
import { Input } from 'rg-dst';


export function PasswordFields<T extends FieldValues>({
  register,
  errors,
  watch,
}: PasswordFieldsProps<T>) {
  const value = (watch('password_confirmation' as any) as string) || '';

  const rules = {
    minLength: value.length >= 8,
    specialChar: /[!@#$%^&*]/.test(value),
    upperLowerNumber:
      /[a-z]/.test(value) && /[A-Z]/.test(value) && /[0-9]/.test(value),
  };

  const isValidPassword =
    rules.minLength && rules.specialChar && rules.upperLowerNumber;

  return {
    isValidPassword,
    element: (
      <>
        {/* Inputs */}
        <div className="flex flex-col gap-3xl">
          <Input
            {...register('password' as any)}
            label="رمز عبور"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
            error={errors?.password?.message as string}
            required
            className="w-full placeholder:text-gray-light-500"
            fullWidth
          />

          <Input
            {...register('password_confirmation' as any)}
            label="تکرار رمز عبور"
            type="password"
            placeholder="تکرار رمز عبور خود را وارد کنید"
            error={errors?.password_confirmation?.message as string}
            required
            className="w-full placeholder:text-gray-light-500"
            fullWidth
          />
        </div>

        {/* Rules */}
        <div className="flex flex-col gap-lg">
          <Rule ok={rules.minLength} label="حداقل ۸ کاراکتر باشد" />
          <Rule
            ok={rules.specialChar}
            label="دارای حداقل یک کاراکتر خاص (!@#$%^&*) باشد"
          />
          <Rule
            ok={rules.upperLowerNumber}
            label="شامل حروف بزرگ، کوچک و عدد باشد"
          />
        </div>
      </>
    ),
  };
}

/* ---------------- helpers ---------------- */

function Rule({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex gap-md items-center">
      <CircleCheckIcon size={20} color={ok ? '#10B981' : '#667085'} />
      <p className="text-sm text-gray-light-600">{label}</p>
    </div>
  );
}
