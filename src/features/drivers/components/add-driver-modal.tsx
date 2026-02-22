import { yupResolver } from '@hookform/resolvers/yup';
import { CirclePlus } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { Input } from 'rg-dst';
import { useResetOnClose } from '@/hooks/use-reset-onClose';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import DatePickerField from '@/components/shared/date-picker-filed';
import type { AddDriverModalProps, FormValues } from '../types';
import { addDriverDefaultValues, addDriverSchema } from './validation';


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
    const handleClose = useResetOnClose<FormValues>({
      reset,
      onClose,
    });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Submitted:', data);
    reset();
    onClose();
  };

 const submitHandler: () => void = () => {
   handleSubmit((data: unknown) => {
     onSubmit(data as FormValues);
   })();
 };

  return (
    <SharedModal
      isOpen={isOpen}
      onClose={handleClose}
      title="راننده جدید"
      icon={<CirclePlus color="var(--color-gray-light-500)" />}
      iconBgClass="bg-gray-light-100"
      confirmText="ثبت راننده"
      onConfirm={submitHandler}
      aria-label="افزودن راننده جدید"
    >
      <form className="grid grid-cols-2 gap-xl">
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
              className="placeholder:text-sm placeholder:text-gray-light-500"
              aria-label="نام"
            />
          )}
        />

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
              className="placeholder:text-sm placeholder:text-gray-light-500"
              aria-label="نام خانوادگی"
            />
          )}
        />

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
              className="placeholder:text-sm placeholder:text-gray-light-500"
              aria-label="شماره موبایل"
            />
          )}
        />

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
              className="placeholder:text-sm placeholder:text-gray-light-500"
              aria-label="کد ملی"
            />
          )}
        />

        <Controller
          control={control}
          name="birthDate"
          render={({ field }) => (
            <DatePickerField
              {...field}
              label="تاریخ تولد"
              placeholder="برای مثال 1403/11/12"
              onChange={(date) => field.onChange(date)}
              value={field.value}
              className="placeholder:text-sm placeholder:text-gray-light-500"
              aria-label="تاریخ تولد"
            />
          )}
        />

        <Controller
          control={control}
          name="gender"
          render={({ field }) => {
            const options = [
              { label: 'مرد', value: 'male' },
              { label: 'زن', value: 'female' },
            ];
            const value = options.find((o) => o.value === field.value) || null;
            return (
              <CustomSelect
                {...field}
                options={options}
                label="جنسیت"
                placeholder="انتخاب کنید"
                value={value}
                onChange={(option) => field.onChange(option?.value)}
                aria-label="جنسیت"
              />
            );
          }}
        />

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
              className="placeholder:text-sm placeholder:text-gray-light-500"
              aria-label="نوع خودرو"
            />
          )}
        />

        <Controller
          control={control}
          name="plateNumber"
          render={({ field }) => (
            <Input
              {...field}
              label="پلاک خودرو"
              placeholder="پلاک خودرو را وارد کنید"
              destructive={!!errors.plateNumber}
              destructiveText={errors.plateNumber?.message}
              className="placeholder:text-sm placeholder:text-gray-light-500"
              aria-label="پلاک خودرو"
            />
          )}
        />
      </form>
    </SharedModal>
  );
}