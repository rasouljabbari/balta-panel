import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import DatePickerField from '@/components/shared/date-picker-filed';
import PlateInput from '@/features/drivers/components/plate-input';
import { useResetOnClose } from '@/hooks/use-reset-onClose';
import { convertPersianToGregorian } from '@/utils/convert-persian-to-gregorian';
import { yupResolver } from '@hookform/resolvers/yup';
import { CirclePlus } from 'lucide-react';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from 'rg-dst';
import { useCreateDriver } from '../hook/drivers';
import type { AddDriverModalProps, CreateDriverPayload } from '../types';
import { addDriverDefaultValues, addDriverSchema, type FormValues } from '../validation';

export default function AddDriverModal({
  isOpen,
  onClose,
}: AddDriverModalProps) {
  const {
    handleSubmit,
    reset,
    setError,
    control,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(addDriverSchema) as any,
    defaultValues: addDriverDefaultValues,
  });

  const handleClose = useResetOnClose({ reset, onClose });

  const { mutate: createDriver, isPending } = useCreateDriver(handleClose, setError);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const payload: CreateDriverPayload = {
      first_name: data.first_name.trim(),
      last_name: data.last_name.trim(),
      phone: data.phone.trim(),
      national_id: data.national_id?.trim(),
      birth_date: data.birth_date
        ? convertPersianToGregorian(data.birth_date)
        : undefined,
      gender:
        data.gender === 'male' || data.gender === 'female'
          ? data.gender
          : undefined,
      car_type: data.car_type?.trim() || undefined,
      car_plate: data.car_plate
        ? {
          first: String(data.car_plate.first),
          letter: data.car_plate.letter,
          second: String(data.car_plate.second),
          state: String(data.car_plate.state),
        }
        : undefined,
    };
    createDriver(payload);
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

        <div className="grid grid-cols-2 gap-xl px-3xl">
          {/* نام */}
          <Controller
            control={control}
            name="first_name"
            render={({ field }) => (
              <Input
                {...field}
                label="نام"
                placeholder="نام را وارد کنید"
                required
                destructive={!!errors.first_name}
                destructiveText={errors.first_name?.message}
                className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
                aria-label="نام"
              />
            )}
          />

          {/* نام خانوادگی */}
          <Controller
            control={control}
            name="last_name"
            render={({ field }) => (
              <Input
                {...field}
                label="نام خانوادگی"
                placeholder="نام خانوادگی را وارد کنید"
                required
                destructive={!!errors.last_name}
                destructiveText={errors.last_name?.message}
                className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
                aria-label="نام خانوادگی"
              />
            )}
          />

          {/* موبایل */}
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                label="شماره موبایل"
                placeholder="شماره موبایل را وارد کنید"
                required
                destructive={!!errors.phone}
                destructiveText={errors.phone?.message}
                className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
                aria-label="شماره موبایل"
              />
            )}
          />

          {/* کد ملی */}
          <Controller
            control={control}
            name="national_id"
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                label="کدملی"
                placeholder="کدملی را وارد کنید"
                required
                destructive={!!errors.national_id}
                destructiveText={errors.national_id?.message}
                className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
                aria-label="کدملی"
              />
            )}
          />

          {/* تاریخ تولد */}
          <Controller
            control={control}
            name="birth_date"
            render={({ field }) => (
              <DatePickerField
                {...field}
                label="تاریخ تولد"
                placeholder="برای مثال 1403/11/12"
                error={!!errors.birth_date}
                errorText={errors.birth_date?.message}
                required
                aria-label="تاریخ تولد"
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
                  aria-label="جنسیت"
                />
              );
            }}
          />

          {/* نوع خودرو */}
          <Controller
            control={control}
            name="car_type"
            render={({ field }) => (
              <Input
                {...field}
                label="نوع خودرو"
                placeholder="نوع خودرو را وارد کنید"
                destructive={!!errors.car_type}
                destructiveText={errors.car_type?.message}
                required
                value={field.value ?? ''}
                className="placeholder:text-sm placeholder:text-gray-light-500 w-full"
                aria-label="نوع خودرو"
              />
            )}
          />

          {/* پلاک خودرو */}
          <Controller
            control={control}
            name="car_plate"
            render={({ field }) => (
              <PlateInput
                label="پلاک خودرو"
                required
                value={field.value}
                onChange={field.onChange}
                error={!!errors.car_plate}
                aria-label="پلاک خودرو"
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
              aria-label=" ثبت راننده"
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