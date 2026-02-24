import { useEffect } from 'react';
import { convertPersianToGregorian } from '@/utils/convert-persian-to-gregorian';
import { yupResolver } from '@hookform/resolvers/yup';
import { User } from 'lucide-react';
import DateObject from 'react-date-object';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Button, Input } from 'rg-dst';
import { Card, CardHeader } from '@/components/shared/card';
import CustomSelect from '@/components/shared/custom-select';
import DatePickerField from '@/components/shared/date-picker-filed';
import InfoHeader from '@/components/shared/info-header';
import { useDriverById, useEditDriverPage } from '../hook/drivers';
import { LETTERS } from './data';
import PlateInput from './plate-input';
import { addDriverDefaultValues, addDriverSchema, type FormValues } from './validation';
import { Skeleton } from '@/components/shared/skeleton-loader';


export default function DriverEditForm() {
  const { id } = useParams();
  const { data: driver, isLoading } = useDriverById(id);
  

   const editDriverMutation = useEditDriverPage();
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
      birthDate: driver.birth_date
        ? new DateObject({
            date: new Date(driver.birth_date), 
            calendar: persian, 
            locale: persian_fa, 
          })
        : null,
      gender: driver.gender,
      carType: driver.car_type,
      plateNumber: driver.car_plate
        ? {
            first: Number(driver.car_plate.first) || 0,
            letter: (LETTERS.includes(driver.car_plate.letter)
              ? driver.car_plate.letter
              : 'ب') as (typeof LETTERS)[number],
            second: Number(driver.car_plate.second) || 0,
            state: Number(driver.car_plate.state) || 0,
          }
        : { first: 0, letter: 'ب', second: 0, state: 0 },
    });
  }
}, [driver, reset]);
  
  const onSubmit = (data: FormValues) => {
    if (!driver) return;

    editDriverMutation.mutate({
      id: driver.id,
      payload: {
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.mobile,
        national_id: data.nationalCode,
        birth_date: data.birthDate
          ? convertPersianToGregorian(data.birthDate)
          : undefined,
        gender: data.gender,
        joined_at: driver.joined_at ?? undefined,
        car_type: data.carType,
        car_plate: {
          first: data.plateNumber.first.toString(),
          letter: data.plateNumber.letter,
          second: data.plateNumber.second.toString(),
          state: data.plateNumber.state.toString(),
        },
      },
    });
  };


  if (isLoading || !driver) {
    return (
      <div className="p-7">
        <Card className="p-0">
          <CardHeader>
            <Skeleton className="h-6 w-1/3 mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </CardHeader>
          <div className="p-3xl space-y-5">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="flex gap-5">
                <Skeleton className="w-1/2 h-10" rounded="md" />
                <Skeleton className="w-1/2 h-10" rounded="md" />
              </div>
            ))}
            <div className="flex justify-start gap-5">
              <Skeleton className="w-32 h-10" rounded="md" />
            </div>
          </div>
        </Card>
      </div>
    );
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
              name="nationalCode"
              control={control}
              render={({ field }) => (
                <Input
                  label="کد ملی"
                  type="number"
                  {...field}
                  error={errors.nationalCode?.message}
                  className="w-full"
                  aria-label="کد ملی"
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
            <Input
              label="کد کاربر"
              className="w-full"
              disabled
              value={driver?.user_code || '---'}
            />
            {/* Join Date */}
            <Input
              label="تاریخ عضویت"
              className="w-full"
              disabled
              value={
                driver?.joined_at
                  ? new Date(driver.joined_at).toLocaleDateString('fa-IR')
                  : ''
              }
            />
            <Controller
              name="carType"
              control={control}
              render={({ field }) => (
                <Input
                  label="نوع خودرو"
                  {...field}
                  error={errors.carType?.message}
                  className="w-full"
                  aria-label="نوع خودرو"
                />
              )}
            />
            <Controller
              name="plateNumber"
              control={control}
              render={({ field }) => (
                <PlateInput
                  {...field}
                  label="پلاک خودرو"
                  error={!!errors.plateNumber}
                  errorText={errors.plateNumber?.message}
                  showFlag={false}
                />
              )}
            />

            <hr className="-mx-3xl my-4 border-gray-light-200 col-span-2" />
            <div className="flex items-center gap-lg mr-auto col-span-2">
              <Button
                type="submit"
                className="bg-utility-brand-600"
                aria-label="ذخیره تغییرات"
                loading={editDriverMutation.isPending}
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