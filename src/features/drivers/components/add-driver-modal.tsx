import { useState } from 'react';
import { convertPersianToGregorian } from '@/utils/convert-persian-to-gregorian';
import { yupResolver } from '@hookform/resolvers/yup';
import { CirclePlus } from 'lucide-react';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from 'rg-dst';
import { useResetOnClose } from '@/hooks/use-reset-onClose';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import DatePickerField from '@/components/shared/date-picker-filed';
import { useCreateDriver } from '../hook/drivers';
import type { AddDriverModalProps, CreateDriverPayload } from '../types';
import PlateInput from './plate-input';
import { addDriverDefaultValues, addDriverSchema, type FormValues } from './validation';


export default function AddDriverModal({
  isOpen,
  onClose,
}: AddDriverModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(addDriverSchema) as any,
    defaultValues: addDriverDefaultValues,
  });

  const handleClose = useResetOnClose({ reset, onClose });
  const [serverError, setServerError] = useState<string | null>(null);

  const { mutate: createDriver, isPending } = useCreateDriver(
    (modalOpen: boolean) => modalOpen && handleClose(),
    setServerError,
  );

const onSubmit: SubmitHandler<FormValues> = (data) => {
  const payload: CreateDriverPayload = {
    first_name: data.firstName.trim(),
    last_name: data.lastName.trim(),
    phone: data.mobile.trim(),
    national_id: data.nationalCode?.trim() || undefined,
    birth_date: convertPersianToGregorian(data.birthDate),
    gender:
      data.gender === 'male' || data.gender === 'female'
        ? data.gender
        : undefined,
    car_type: data.carType?.trim() || undefined,
    car_plate: data.plateNumber
      ? {
          first: data.plateNumber.first,
          letter: data.plateNumber.letter,
          second: data.plateNumber.second,
          state: data.plateNumber.state,
        }
      : undefined,
  };
console.log('Payload to API:', JSON.stringify(payload, null, 2));  createDriver(payload);
};

return (
  <SharedModal
    isOpen={isOpen}
    onClose={handleClose}
    title="راننده جدید"
    icon={<CirclePlus color="var(--color-gray-light-500)" />}
    iconBgClass="bg-gray-light-100"
    showFooter={false}
    aria-label="افزودن راننده جدید"
    bodyClassName="px-0"
    widthClass="w-[640px]"
  >
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-xl">
      {serverError && (
        <div className="text-red-500 text-sm mb-3">{serverError}</div>
      )}

      <div className="grid grid-cols-2 gap-xl px-3xl">
        {/* نام */}
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <Input
              {...field}
              label="نام"
              placeholder="نام را وارد کنید"
              required
              destructive={!!errors.firstName}
              destructiveText={errors.firstName?.message}
              value={field.value ?? ''}
              className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
            />
          )}
        />

        {/* نام خانوادگی */}
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <Input
              {...field}
              label="نام خانوادگی"
              placeholder="نام خانوادگی را وارد کنید"
              required
              destructive={!!errors.lastName}
              destructiveText={errors.lastName?.message}
              value={field.value ?? ''}
              className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
            />
          )}
        />

        {/* موبایل */}
        <Controller
          control={control}
          name="mobile"
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              label="شماره موبایل"
              placeholder="شماره موبایل را وارد کنید"
              required
              destructive={!!errors.mobile}
              destructiveText={errors.mobile?.message}
              value={field.value ?? ''}
              className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
            />
          )}
        />

        {/* کد ملی */}
        <Controller
          control={control}
          name="nationalCode"
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              label="کدملی"
              placeholder="کدملی را وارد کنید"
              required
              destructive={!!errors.nationalCode}
              destructiveText={errors.nationalCode?.message}
              value={field.value ?? ''}
              className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
            />
          )}
        />

        {/* تاریخ تولد */}
        <Controller
          control={control}
          name="birthDate"
          render={({ field }) => (
            <DatePickerField
              label="تاریخ تولد"
              placeholder="برای مثال 1403/11/12"
              value={field.value}
              onChange={(date) => field.onChange(date)}
              error={!!errors.birthDate}
              errorText={errors.birthDate?.message}
              required
            />
          )}
        />

        {/* جنسیت */}
        <Controller
          control={control}
          name="gender"
          render={({ field }) => {
            const options = [
              { label: 'مرد', value: 'male' },
              { label: 'زن', value: 'female' },
            ];

            return (
              <CustomSelect
                options={options}
                label="جنسیت"
                placeholder="انتخاب کنید"
                value={options.find((o) => o.value === field.value) ?? null}
                onChange={(option) => field.onChange(option?.value)}
                error={errors.gender?.message}
                required
              />
            );
          }}
        />

        {/* نوع خودرو */}
        <Controller
          control={control}
          name="carType"
          render={({ field }) => (
            <Input
              {...field}
              label="نوع خودرو"
              placeholder="نوع خودرو را وارد کنید"
              destructive={!!errors.carType}
              destructiveText={errors.carType?.message}
              required
              value={field.value ?? ''}
              className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
            />
          )}
        />

        {/* پلاک خودرو */}
        <Controller
          control={control}
          name="plateNumber"
          render={({ field }) => (
            <PlateInput
              label="پلاک خودرو"
              required
              value={field.value}
              onChange={field.onChange}
              error={!!errors.plateNumber}
              errorText={errors.plateNumber?.message}
            />
          )}
        />
      </div>

      <div className="border-t border-gray-light-200">
        <div className="flex justify-end gap-xl pt-xl px-3xl">
          <Button
            type="button"
            className="bg-base-white text-gray-light-700 border border-gray-light-300 hover:bg-base-white p-[10px] px-xl"
            onClick={handleClose}
          >
            انصراف
          </Button>

          <Button
            type="submit"
            loading={isPending}
            className="p-2.5 px-xl bg-utility-brand-600 hover:bg-utility-brand-700 text-base-white"
          >
            ثبت راننده
          </Button>
        </div>
      </div>
    </form>
  </SharedModal>
);
}