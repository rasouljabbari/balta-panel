import CustomSelect from '@/components/shared/custom-select';
import {
  addMenuInitialValues,
  addMenuResolver,
  type addMenuValuesTypes,
} from '@/features/definition/validation';
import { useHandleApiFormErrors } from '@/hooks/use-handle-api-form-errors';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'dst-rg';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { usePackaging } from '../../hooks/packages';
import type { MenuFormProps } from '../../type';

const MenuForm = forwardRef<{ submit: () => void }, MenuFormProps>(
  ({ defaultValues, onSubmit, serverValidationError }, ref) => {
    const {
      control,
      register,
      formState: { errors },
      handleSubmit,
      setError
    } = useForm<addMenuValuesTypes>({
      resolver: yupResolver(addMenuResolver) as any,
      defaultValues: defaultValues
        ? {
          name: defaultValues.name,
          default_packaging_id:
            defaultValues.default_packaging?.id ?? undefined,
        }
        : addMenuInitialValues,
    });

    const { handleApiFormErrors } =
      useHandleApiFormErrors<addMenuValuesTypes>();

    useEffect(() => {
      if (serverValidationError?.error) {
        handleApiFormErrors({
          error: serverValidationError,
          setError
        });
      }
    }, [serverValidationError, setError])

    const { data: packaging = [], isLoading } = usePackaging();

    const packagingOptions = !isLoading
      ? packaging.filter(elem => elem.is_active)?.map((p) => ({
        value: p.id,
        label: p.name,
      }))
      : [];

    useImperativeHandle(ref, () => ({
      submit: () => {
        handleSubmit(onSubmit)();
      },
    }));

    return (
      <form className="flex flex-col gap-3xl">
        <Input
          label="نام منو"
          {...register('name')}
          className="w-full placeholder:text-sm placeholder:text-gray-light-600"
          placeholder="نام منو را وارد کنید..."
          destructive={!!errors.name}
          destructiveText={errors.name?.message}
        />

        <CustomSelect
          name="default_packaging_id"
          control={control}
          options={packagingOptions}
          label='بسته‌بندی پیشفرض'
          placeholder="بسته‌بندی پیشفرض را انتخاب نمایید"
          isDisabled={isLoading}
          error={errors.default_packaging_id?.message}
        />
      </form>
    );
  },
);

export default MenuForm;
