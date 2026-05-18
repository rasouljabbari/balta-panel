import { addPackageInitialValues, addPackageResolver, type addPackageValuesTypes } from '@/features/definition/validation';
import { normalizeNumericInput, numericInputProps } from '@/utils/numeric-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'dst-rg';
import type { PackageFormProps } from '../../type';

const PackageForm = forwardRef<{ submit: () => void }, PackageFormProps>(
  ({ defaultValues, onSubmit, serverValidationError }, ref) => {

    const { register, formState: { errors }, handleSubmit, setError } = useForm<addPackageValuesTypes>({
      resolver: yupResolver(addPackageResolver) as any,
      defaultValues:
        defaultValues ? {
          name: defaultValues.name,
          price: defaultValues.price,
        } :
          addPackageInitialValues,
    });

    useEffect(() => {
      if (serverValidationError)
        serverValidationError?.error?.forEach((err: any) => {
          setError(err.field, {
            type: 'server',
            message: err.message,
          });
        });
    }, [serverValidationError, setError])

    useImperativeHandle(ref, () => ({
      submit: () => {
        handleSubmit(onSubmit)();
      },
    }));

    const priceRegister = register('price', {
      setValueAs: (value) => {
        const digits = normalizeNumericInput(value);
        return digits === '' ? undefined : Number(digits);
      },
    });

    return (
      <form id="package-form" className="flex flex-col gap-3xl">
        <Input
          label="نام بسته‌بندی"
          placeholder="نام بسته‌بندی را وارد کنید..."
          className="w-full placeholder:text-sm placeholder:text-gray-light-600"
          {...register('name')}
          destructive={errors?.name}
          destructiveText={errors?.name?.message}
        />

        <div dir="ltr" className="dv-price-input">
          <Input
            {...numericInputProps}
            label="قیمت بسته‌بندی"
            leadingTextValue="تومان"
            inputType="leadingText"
            labelClass="dv-price-label"
            className="w-full placeholder:text-sm placeholder:text-gray-light-600"
            placeholder="قیمت را وارد کنید"
            {...priceRegister}
            onChange={(e: any) => {
              const next = normalizeNumericInput(e?.target?.value);
              e.target.value = next;
              priceRegister.onChange(e);
            }}
            destructive={errors?.price}
            destructiveText={errors?.price?.message}
          />
        </div>
      </form>
    );
  },
);

export default PackageForm;
