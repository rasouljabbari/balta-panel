import { Card, CardHeader } from '@/components/shared/card';
import CustomSelect from '@/components/shared/custom-select';
import DatePickerField from '@/components/shared/date-picker-filed';
import InfoHeader from '@/components/shared/info-header';
import { Skeleton } from '@/components/shared/skeleton-loader';
import { convertPersianToGregorian } from '@/utils/convert-persian-to-gregorian';
import { yupResolver } from '@hookform/resolvers/yup';
import { User } from 'lucide-react';
import { useEffect } from 'react';
import DateObject from 'react-date-object';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Button, Input } from 'rg-dst';
import { PERSIAN_LETTERS } from '../data';
import { useDriverById, useEditDriverPage } from '../hook/drivers';
import { addDriverDefaultValues, addDriverSchema, type FormValues } from '../validation';
import PlateInput from './plate-input';


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
        first_name: driver.first_name,
        last_name: driver.last_name,
        phone: driver.phone,
        national_id: driver.national_id,
        birth_date: driver.birth_date
          ? new DateObject({
            date: new Date(driver.birth_date),
            calendar: persian,
            locale: persian_fa,
          })
          : null,
        gender: driver.gender,
        car_type: driver.car_type,
        car_plate: driver.car_plate
          ? {
            first: Number(driver.car_plate?.first) || 0,
            letter: PERSIAN_LETTERS.some(
              (l) => l === driver.car_plate?.letter,
            )
              ? driver.car_plate.letter!
              : 'ب',
            second: Number(driver.car_plate?.second) || 0,
            state: Number(driver.car_plate?.state) || 0,
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
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
        national_id: data.national_id,
        birth_date: data.birth_date
          ? convertPersianToGregorian(data.birth_date)
          : undefined,
        gender: data.gender,
        joined_at: driver.joined_at ?? undefined,
        car_type: data.car_type,
        car_plate: {
          first: data?.car_plate?.first?.toString(),
          letter: data?.car_plate?.letter,
          second: data?.car_plate?.second?.toString(),
          state: data?.car_plate?.state?.toString(),
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
              name="first_name"
              control={control}
              render={({ field }) => (
                <Input
                  label="نام"
                  {...field}
                  error={errors.first_name?.message}
                  className="w-full"
                  aria-label="نام"
                />
              )}
            />
            <Controller
              name="last_name"
              control={control}
              render={({ field }) => (
                <Input
                  label="نام خانوادگی"
                  {...field}
                  error={errors.last_name?.message}
                  className="w-full"
                  aria-label="نام خانوادگی"
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  label="شماره موبایل"
                  type="number"
                  {...field}
                  error={errors.phone?.message}
                  className="w-full"
                  aria-label="شماره موبایل"
                />
              )}
            />
            <Controller
              name="national_id"
              control={control}
              render={({ field }) => (
                <Input
                  label="کد ملی"
                  type="number"
                  {...field}
                  error={errors.national_id?.message}
                  className="w-full"
                  aria-label="کد ملی"
                />
              )}
            />
            {/* Birth Date */}
            <Controller
              control={control}
              name="birth_date"
              render={({ field }) => (
                <DatePickerField
                  {...field}
                  label="تاریخ تولد"
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
              name="car_type"
              control={control}
              render={({ field }) => (
                <Input
                  label="نوع خودرو"
                  {...field}
                  error={errors.car_type?.message}
                  className="w-full"
                  aria-label="نوع خودرو"
                />
              )}
            />
            <Controller
              name="car_plate"
              control={control}
              render={({ field }) => (
                <PlateInput
                  {...field}
                  label="پلاک خودرو"
                  error={!!errors.car_plate}
                  aria-label="پلاک خودرو"
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