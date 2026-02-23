import { useState } from 'react';
import { Input, Switch } from 'rg-dst';
import { ContactFoodIcon } from '@/components/icons/contract-icon';
import { Card, CardHeader } from '@/components/shared/card';
import CustomSelect from '@/components/shared/custom-select';


export function MealCard() {
  const [isServiceActive, setIsServiceActive] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-xl">
          <div className="flex-center border w-10 h-10 rounded-lg border-gray-light-200 shadow-xs">
            <ContactFoodIcon />
          </div>
          <h2 className="text-lg font-semibold text-gray-light-900">
            اطلاعات پایه وعده
          </h2>
        </div>
      </CardHeader>

      <div className="flex flex-col gap-6 p-3xl">
        <Switch
          label="وضعیت سرویس‌دهی"
          checked={isServiceActive}
          onToggle={() => setIsServiceActive(!isServiceActive)}
          className="data-[state=checked]:bg-utility-brand-600"
        />

        <div className="grid grid-cols-3 gap-6">
          <Input label="ساعت تحویل" required className="w-full" />

          <div dir="ltr" className="dv-price-input">
            <Input
              inputType="leadingText"
              labelClass="dv-price-label"
              label="تعداد سفارش"
              required
              className="w-full placeholder:text-sm placeholder:text-gray-light-500"
              leadingTextValue="پرس"
              placeholder="تعداد را وارد کنید"
              type = "number"
            />
          </div>

          <Input
            label="تنوع غذایی"
            required
            className="w-full placeholder:text-sm placeholder:text-gray-light-500"
            placeholder="تعداد را وارد کنید"
          />

          <CustomSelect
            options={[]}
            label="راننده پیش‌فرض"
            placeholder="راننده را انتخاب کنید"
          />

          <div className="col-span-2">
            <Input
              label="توضیحات برای آشپزخانه"
              placeholder="توضیحات برای آشپزخانه"
              className="w-full placeholder:text-sm placeholder:text-gray-light-500"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}