import { Input } from 'rg-dst';
import { useState } from 'react';
import { InterfaceIcon } from '@/components/icons/contract-icon';
import { Card, CardHeader } from '@/components/shared/card';
import { numericInputProps, normalizeNumericInput } from '@/utils/numeric-input';


export function MealLimitsCard() {
  const [minOrder, setMinOrder] = useState('');
  const [maxOrder, setMaxOrder] = useState('');
  const [editTolerance, setEditTolerance] = useState('');

  return (
    <div className="col-span-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-xl">
            <div className="flex-center border w-10 h-10 rounded-lg border-gray-light-200 shadow-xs">
              <InterfaceIcon />
            </div>
            <h2 className="text-lg font-semibold text-gray-light-900">
              محدودیت های تعداد و ویرایش
            </h2>
          </div>
        </CardHeader>

        <div className="flex flex-col gap-xl p-3xl">
          <h3 className="font-semibold text-gray-light-700">
            تلرانس ثبت اولیه تعداد غذا
          </h3>

          <div className="flex flex-col gap-3xl">
            <div className="grid grid-cols-2 gap-3xl">
              <div dir="ltr" className="dv-price-input">
                <Input
                  inputType="leadingText"
                  labelClass="dv-price-label"
                  label="حداقل سفارش"
                  required
                  className="w-full placeholder:text-sm placeholder:text-gray-light-500"
                  leadingTextValue="پرس"
                  placeholder="تعداد را وارد کنید"
                  {...numericInputProps}
                  value={minOrder}
                  onChange={(e : any) => setMinOrder(normalizeNumericInput(e.target.value))}
                />
              </div>

              <div dir="ltr" className="dv-price-input">
                <Input
                  inputType="leadingText"
                  labelClass="dv-price-label"
                  label="حداکثر سفارش"
                  required
                  className="w-full placeholder:text-sm placeholder:text-gray-light-500"
                  leadingTextValue="پرس"
                  placeholder="تعداد را وارد کنید"
                  {...numericInputProps}
                  value={maxOrder}
                  onChange={(e : any) => setMaxOrder(normalizeNumericInput(e.target.value))}
                />
              </div>
            </div>

            <hr className="border-gray-light-200" />

            <div className="flex flex-col items-start gap-xl">
              <h3 className="font-semibold text-gray-light-700">
                محدودیت ویرایش تعداد غذای روز
              </h3>

              <div dir="ltr" className="dv-price-input">
                <Input
                  inputType="leadingText"
                  labelClass="dv-price-label"
                  label="تلرانس ویرایش تعداد غذا"
                  required
                  className="w-[344px] placeholder:text-sm placeholder:text-gray-light-500"
                  leadingTextValue="پرس"
                  placeholder="تعداد را وارد کنید"
                  {...numericInputProps}
                  value={editTolerance}
                  onChange={(e : any) => setEditTolerance(normalizeNumericInput(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}