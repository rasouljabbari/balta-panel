import { User } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Button, Input } from 'rg-dst';
import { Card, CardHeader } from '@/components/shared/card';
import CustomSelect from '@/components/shared/custom-select';
import DatePickerField from '@/components/shared/date-picker-filed';
import InfoHeader from '@/components/shared/info-header';
import type { DriverFormValues } from '../types';


export default function DriverEditForm() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DriverFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      mobile: '',
      nationalCode: '',
      birthDate: null,
      gender: null,
      carType: '',
      plateNumber: '',
      userCode: id || '',
      joinDate: '',
    },
  });

  const onSubmit = (data: DriverFormValues) => {
    console.log('form data:', data);
    // updateDriverApi(data)
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
          <Input className="w-full" label="نام" required />

          <Input className="w-full" label="نام خانوادگی" required />

          <Input
            className="w-full"
            label="شماره موبایل"
            type="number"
            required
          />

          <Input className="w-full" label="کد ملی" type="number" required />

          {/* Date Picker */}
          <Controller
            control={control}
            name="birthDate"
            rules={{ required: 'تاریخ تولد الزامی است' }}
            render={({ field }) => (
              <DatePickerField
                {...field}
                label="تاریخ تولد"
                iconPosition="right"
                showDivider={false}
              />
            )}
          />

          {/* Gender Select */}
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <CustomSelect
                {...field}
                label="جنسیت"
                placeholder="انتخاب کنید"
                options={[
                  { label: 'مرد', value: 'male' },
                  { label: 'زن', value: 'female' },
                ]}
                error={errors.gender?.message}
              />
            )}
          />

          <Input
            label="نوع خودرو"
            className="w-full"
            {...register('carType')}
          />

          <Input
            label="پلاک خودرو"
            className="w-full"
            {...register('plateNumber')}
          />

          <Input
            label="کد کاربر"
            className="w-full"
            disabled
            {...register('userCode')}
          />

          <Input
            label="تاریخ عضویت"
            className="w-full"
            disabled
            {...register('joinDate')}
          />

          <hr className="-mx-3xl my-4 border-gray-light-200 col-span-2" />

          <div className="flex items-center gap-lg mr-auto col-span-2">
            <Button type="submit" className="bg-utility-brand-600">
              ذخیره تغییرات
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}