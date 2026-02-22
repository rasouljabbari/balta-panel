import { yupResolver } from '@hookform/resolvers/yup';
import { User } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Button, Input } from 'rg-dst';
import { Card, CardHeader } from '@/components/shared/card';
import CustomSelect from '@/components/shared/custom-select';
import DatePickerField from '@/components/shared/date-picker-filed';
import InfoHeader from '@/components/shared/info-header';
import { addDriverDefaultValues, addDriverSchema, type FormValues } from './validation';


export default function DriverEditForm() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addDriverSchema) as any,
    defaultValues: {...addDriverDefaultValues, userCode: id || ''
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('form data:', data);
    // Call your API here: updateDriverApi(data)
  };

  return (
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
          {/* First Name */}
          <Input
            label="نام"
            {...register('firstName')}
            error={errors.firstName?.message}
            className="w-full"
            aria-label="نام"
          />

          {/* Last Name */}
          <Input
            label="نام خانوادگی"
            {...register('lastName')}
            error={errors.lastName?.message}
            className="w-full"
            aria-label="نام خانوادگی"
          />

          {/* Mobile */}
          <Input
            label="شماره موبایل"
            type="number"
            {...register('mobile')}
            error={errors.mobile?.message}
            className="w-full"
            aria-label="شماره موبایل"
          />

          {/* National Code */}
          <Input
            label="کد ملی"
            type="number"
            {...register('nationalCode')}
            error={errors.nationalCode?.message}
            className="w-full"
            aria-label="کد ملی"
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
          <Input
            label="نوع خودرو"
            {...register('carType')}
            error={errors.carType?.message}
            className="w-full"
            aria-label="نوع خودرو"
          />

          {/* Plate Number */}
          <Input
            label="پلاک خودرو"
            {...register('plateNumber')}
            error={errors.plateNumber?.message}
            className="w-full"
            aria-label="پلاک خودرو"
          />

          <Input
            className="w-full"
            label="کد کاربر"
            disabled
            {...register('userCode')}
          />

          <Input
            className="w-full"
            label="تاریخ عضویت"
            disabled
            {...register('joinDate')}
          />

          <hr className="-mx-3xl my-4 border-gray-light-200 col-span-2" />

          <div className="flex items-center gap-lg mr-auto col-span-2">
            <Button type="submit" className="bg-utility-brand-600" aria-label = "ذخیره تغییرات">
              ذخیره تغییرات
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}