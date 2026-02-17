import { User } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Button, Input } from 'rg-dst';
import { Card, CardHeader } from '@/components/shared/card';
import CustomSelect from '@/components/shared/custom-select';
import DatePickerField from '@/components/shared/date-picker-filed';

export default function DriverEditForm() {
  const { id } = useParams();

  return (
    <Card className="p-0">
      <CardHeader>
        <div className="flex items-center gap-xl">
          <div className="flex justify-center items-center w-10 h-10 border border-gray-light-200 rounded-lg">
            <User size={20} color="var(--color-gray-light-500)" />
          </div>
          <div className="flex flex-col gap-xs">
            <h2 className="text-lg font-semibold text-gray-light-900">
              اطلاعات شخصی
            </h2>
            <p className="text-sm text-gray-light-500">
              در این قسمت، اطلاعات شخصی راننده را مشاهده و به روزرسانی کنید
            </p>
          </div>
        </div>
      </CardHeader>
      <div className="p-3xl">
        <form className="grid grid-cols-2 gap-5">
          <Input className="w-full" label="نام" required />
          <Input className="w-full" label="نام خانواگی" required />
          <Input
            className="w-full"
            label="شماره موبایل"
            required
            type="number"
          />
          <Input className="w-full" label="کد ملی" required type="number" />
          <DatePickerField
            label="تاریخ تولد"
            iconPosition="right"
            showDivider={false}
          />
          <CustomSelect label="جنسیت" placeholder="انتخاب کنید" options={[]} />
          <Input label="نوع خودرو" className="w-full" />
          <Input label="پلاک خودرو" className="w-full" />
          <Input label="کد کاربر" className="w-full" disabled />
          <Input label="تاریخ عضویت" className="w-full" disabled />
          <hr className="-mx-3xl my-4 border-gray-light-200 col-span-2" />
          <div className="flex items-center gap-lg mr-auto col-span-2">
            <Button type="submit" className="bg-utility-brand-600">
              ‌‌ذخیره تغییرات
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}
