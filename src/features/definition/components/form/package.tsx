import { addPackageInitialValues, addPackageResolver, type addPackageValuesTypes } from '@/features/definition/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'rg-dst';
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
        serverValidationError?.error?.validation_errors?.forEach((err: any) => {
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
            type="number"
            label="قیمت بسته‌بندی"
            leadingTextValue="تومان"
            inputType="leadingText"
            labelClass="dv-price-label"
            className="w-full placeholder:text-sm placeholder:text-gray-light-600"
            placeholder="قیمت را وارد کنید"
            {...register('price')}
            destructive={errors?.price}
            destructiveText={errors?.price?.message}
          />
        </div>
      </form>
    );
  },
);

export default PackageForm;
