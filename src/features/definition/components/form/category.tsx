import { addCategoryInitialValues, addCategoryResolver, type addCategoryValuesTypes } from '@/features/definition/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Input, Tabs } from 'rg-dst';
import type { CategoryFormProps } from '../../type';


const tabs = [
  { label: 'محدود به قرارداد', value: 'based_off_contract' },
  { label: 'بدون محدودیت', value: 'unlimited' },
];


const CategoryForm = forwardRef<{ submit: () => void }, CategoryFormProps>(
  ({ defaultValues, onSubmit, serverValidationError }, ref) => {
    const { register, formState: { errors }, handleSubmit, control, setValue, setError } = useForm<addCategoryValuesTypes>({
      resolver: yupResolver(addCategoryResolver) as any,
      defaultValues:
        defaultValues ? {
          name: defaultValues.name,
          order_limit: defaultValues.order_limit,
        } :
          addCategoryInitialValues,
    });

    console.log("serverValidationError", serverValidationError)

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

    const orderLimit = useWatch({
      name: 'order_limit',
      control
    })

    return (
      <form
        id="category-form"
        className="flex flex-col gap-3xl"
      >
        <Input
          label="نام دسته‌بندی"
          placeholder="نام دسته‌بندی را وارد کنید..."
          className="w-full placeholder:text-sm placeholder:text-gray-light-600"
          {...register('name')}
          destructive={errors?.name}
          destructiveText={errors?.name?.message}
        />

        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-light-700">تعداد در سفارش</label>

          <Tabs value={orderLimit} onValueChange={(v) => setValue('order_limit', v)}>
            <Tabs.List
              listVariant="gray"
              className="h-11 w-full border border-gray-light-200 px-xs py-md rounded-lg bg-gray-light-100"
            >
              {tabs.map((t) => (
                <Tabs.Trigger
                  key={t.value}
                  value={t.value}
                  triggerVariant="gray"
                  fullWidth
                  className="
                  text-sm font-semibold
                  data-[state=active]:text-utility-brand-600
                  data-[state=active]:bg-base-white
                  px-2xl py-xl rounded-lg
                "
                >
                  {t.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Tabs>
        </div>
      </form>
    );
  })

export default CategoryForm;