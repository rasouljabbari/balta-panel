import { useMemo, useState } from 'react';
import { useDrivers } from '@/features/drivers/hook/drivers';
import { Controller, useFormContext } from 'react-hook-form';
import { Input, Switch } from 'rg-dst';
import { ContactFoodIcon } from '@/components/icons/contract-icon';
import { Card, CardHeader } from '@/components/shared/card';
import CustomSelect from '@/components/shared/custom-select';
import TimePickerField from '@/components/shared/timer-picker-field';


export function MealCard() {
  const { control } = useFormContext();

  const [driverSearch, setDriverSearch] = useState('');

  const { data: driversData, isLoading } = useDrivers({
    page: 1,
    name: driverSearch,
  });

const driverOptions = useMemo(() => {
  if (!driversData?.drivers) return [];

  return driversData.drivers
    .filter((driver: any) => driver.is_active)
    .map((driver: any) => ({
      label: `${driver.first_name} ${driver.last_name}`,
      value: driver.id,
    }));
}, [driversData]);

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
        {/* isActive */}
        <Controller
          name="isActive"
          control={control}
          render={({ field }) => (
            <Switch
              label="وضعیت سرویس‌دهی"
              checked={!!field.value}
              onToggle={() => field.onChange(!field.value)}
              className="data-[state=checked]:bg-utility-brand-600"
            />
          )}
        />

        <div className="grid grid-cols-3 gap-6">
          <Controller
            name="mealTime"
            control={control}
            render={({ field, fieldState }) => (
              <TimePickerField
                label="ساعت تحویل"
                required
                value={field.value}
                onChange={field.onChange}
                error={!!fieldState.error}
                errorText={fieldState.error?.message}
              />
            )}
          />{' '}
          <Controller
            name="orderCount"
            control={control}
            render={({ field, fieldState }) => (
              <div dir="ltr" className="dv-price-input">
                <Input
                  inputType="leadingText"
                  labelClass="dv-price-label"
                  label="تعداد سفارش"
                  required
                  className="w-full placeholder:text-sm placeholder:text-gray-light-500"
                  leadingTextValue="پرس"
                  placeholder="تعداد را وارد کنید"
                  type="text"
                  inputMode="numeric"
                  value={field.value ?? ''}
                  onChange={(e: { target: { value: string } }) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, '');

                    field.onChange(Number(onlyNumbers));
                  }}
                  destructive={!!fieldState.error}
                  destructiveText={fieldState.error?.message}
                />
              </div>
            )}
          />
          {/* variety */}
          <Controller
            name="variety"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="تنوع غذایی"
                required
                className="w-full"
                type="number"
                value={field.value ?? 0}
                onChange={(e: { target: { value: any } }) =>
                  field.onChange(Number(e.target.value))
                }
                destructive={!!fieldState.error}
                destructiveText={fieldState.error?.message}
              />
            )}
          />
          {/* driver */}
          <Controller
            name="driverId"
            control={control}
            render={({ field, fieldState }) => (
              <CustomSelect
                options={driverOptions}
                value={
                  driverOptions.find((d) => d.value === field.value) ?? null
                }
                onChange={(option) => field.onChange(option?.value ?? null)}
                onInputChange={setDriverSearch}
                label="راننده پیش‌فرض"
                placeholder={
                  isLoading
                    ? 'در حال دریافت راننده‌ها...'
                    : 'راننده را انتخاب کنید'
                }
                error={fieldState.error?.message}
                required
              />
            )}
          />
          {/* kitchenNote */}
          <Controller
            name="kitchenNote"
            control={control}
            render={({ field, fieldState }) => (
              <div className="col-span-2">
                <Input
                  label="توضیحات برای آشپزخانه"
                  className="w-full"
                  value={field.value ?? ''}
                  onChange={(e: { target: { value: any } }) =>
                    field.onChange(e.target.value)
                  }
                  destructive={!!fieldState.error}
                  destructiveText={fieldState.error?.message}
                />
              </div>
            )}
          />
        </div>
      </div>
    </Card>
  );
}