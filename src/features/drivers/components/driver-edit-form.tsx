import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { User } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Button, Input } from 'rg-dst';
import { Card, CardHeader } from '@/components/shared/card';
import CustomSelect from '@/components/shared/custom-select';
import DatePickerField from '@/components/shared/date-picker-filed';
import InfoHeader from '@/components/shared/info-header';
import { useDriverById } from '../hook/drivers';
import { addDriverDefaultValues, addDriverSchema, type FormValues } from './validation';
import DateObject from 'react-date-object';


export default function DriverEditForm() {
  const { id } = useParams();
const { data: driver, isLoading } = useDriverById(id);
  const {
  reset,
  control,
  handleSubmit,
  formState: { errors },
} = useForm<FormValues>({
  resolver: yupResolver(addDriverSchema) as any,
  defaultValues: addDriverDefaultValues,
});

useEffect(() => {
  if (driver) {
    reset({
      ...addDriverDefaultValues,
      firstName: driver.first_name,
      lastName: driver.last_name,
      mobile: driver.phone,
      nationalCode: driver.national_id,
      birthDate: driver.birth_date ? new DateObject(driver.birth_date) : null,
    });
  }
}, [driver, reset]);

  const onSubmit = (data: FormValues) => {
    console.log('form data:', data);
  };

if (isLoading || !driver) {
  return <div>در حال بارگذاری اطلاعات راننده...</div>;
}

  return (
    <div className="p-7">
      <Card className="p-0">
        <CardHeader>
          <InfoHeader
            title="اطلاعات شخصی"
            description="در این قسمت، اطلاعات شخصی راننده را مشاهده و به روزرسانی کنید"
            icon={<User size={20} color="var(--color-gray-light-500)" />}
          />
        </CardHeader>

        <div className="p-3xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-5"
          >
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  label="نام"
                  {...field}
                  error={errors.firstName?.message}
                  className="w-full"
                  aria-label="نام"
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  label="نام خانوادگی"
                  {...field}
                  error={errors.lastName?.message}
                  className="w-full"
                  aria-label="نام خانوادگی"
                />
              )}
            />
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <Input
                  label="شماره موبایل"
                  type="number"
                  {...field}
                  error={errors.mobile?.message}
                  className="w-full"
                  aria-label="شماره موبایل"
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
                  iconPosition="right"
                  showDivider={false}
                  aria-label="تاریخ تولد"
                />
              )}
            />

            {/* Birth Date */}
            <Controller
              control={control}
              name="birthDate"
              render={({ field }) => (
                <DatePickerField
                  {...field}
                  label="تاریخ تولد"
                  iconPosition="right"
                  showDivider={false}
                  aria-label="تاریخ تولد"
                />
              )}
            />
            <CustomSelect
              control={control}
              name="gender"
              label="جنسیت"
              placeholder="انتخاب کنید"
              options={[
                { label: 'مرد', value: 'male' },
                { label: 'زن', value: 'female' },
              ]}
              error={errors.gender?.message}
              isMulti={false}
              aria-label="جنسیت"
            />

            {/* Car Type */}
            {/* <Input
              label="نوع خودرو"
              {...register('carType')}
              error={errors.carType?.message}
              className="w-full"
              aria-label="نوع خودرو"
            /> */}

            {/* Plate Number */}
            {/* <Input
              label="پلاک خودرو"
              {...register('plateNumber')}
              error={errors.plateNumber?.message}
              className="w-full"
              aria-label="پلاک خودرو"
            /> */}

            {/* <Input
              className="w-full"
              label="کد کاربر"
              disabled
              {...register('userCode')}
            /> */}

            {/* <Input
              className="w-full"
              label="تاریخ عضویت"
              disabled
              {...register('joinDate')}
            /> */}

            <hr className="-mx-3xl my-4 border-gray-light-200 col-span-2" />

            <div className="flex items-center gap-lg mr-auto col-span-2">
              <Button
                type="submit"
                className="bg-utility-brand-600"
                aria-label="ذخیره تغییرات"
              >
                ذخیره تغییرات
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}