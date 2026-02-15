import { useEffect } from 'react';
import { CirclePlus, X } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Checkbox, Input, Switch, TextArea } from 'rg-dst';
import { useResetOnClose } from '@/hooks/use-reset-onClose';
import CustomSelect from '@/components/shared/custom-select';
import Sheet from '@/components/shared/sheet';
import type { FoodFormValues, SheetFormProps } from '../type';
import { fakeOptions, meal, weekDays } from './data';
import ImageUploadPreview from './image-upload-file';


const DEFAULT_VALUES: FoodFormValues = {
  name: '',
  meals: [],
  menus: [],
  categories: [],
  price: '',
  description: '',
  isDailyFood: false,
  weekDays: [],
  image: null,
  isVisible: true,
};

export default function FoodSheet({
  open,
  onClose,
  mode,
  selectedFood,
}: SheetFormProps) {
  const { handleSubmit, control, watch, setValue, reset } =
    useForm<FoodFormValues>({
      defaultValues: DEFAULT_VALUES,
    });

  const mapFoodToForm = (food: any): FoodFormValues => ({
    name: food.name ?? '',
    meals: food.meals ?? [],
    menus: food.menus ?? [],
    categories: food.categories ?? [],
    price: String(food.price ?? ''),
    description: food.description ?? '',
    isDailyFood: food.isDailyFood ?? false,
    weekDays: food.weekDays ?? [],
    image: null,
    isVisible: food.isVisible ?? true,
  });

  useEffect(() => {
    if (!open) return;

    if (mode === 'edit' && selectedFood) {
      reset(mapFoodToForm(selectedFood));
    } else {
      reset(DEFAULT_VALUES);
    }
  }, [open, mode, selectedFood, reset]);

  const handleClose = useResetOnClose<FoodFormValues>({
    reset,
    onClose,
    resetValues:
      mode === 'edit' && selectedFood
        ? mapFoodToForm(selectedFood)
        : DEFAULT_VALUES,
  });

  const isDailyFood = watch('isDailyFood');
  const imageFile = watch('image');

  const onSubmit = (data: FoodFormValues) => {
    console.log('FORM DATA:', data);
    handleClose();
  };

  return (
    <Sheet open={open} onClose={handleClose} side="left" width="480px">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col">
        {/* Header */}
        <div className="p-xl border-b border-gray-light-200 flex justify-between items-center">
          <div className="flex items-center gap-xl">
            <div className="flex items-center justify-center bg-gray-light-100 w-12 h-12 rounded-full">
              <CirclePlus size={24} color="var(--color-gray-light-500)" />
            </div>
            <h2 className="text-lg font-semibold text-gray-light-900">
              {mode === 'create' ? 'افزودن آیتم جدید' : 'ویرایش آیتم'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-light-500 hover:text-gray-light-900 transition-colors"
          >
            <X size={20} color="var(--color-gray-light-700)" />
          </button>
        </div>
        {/* Body */}
        <div className="flex flex-col gap-3xl overflow-y-auto p-3xl">
          {/* Image Upload */}
          <ImageUploadPreview
            file={imageFile}
            onChange={(file) => setValue('image', file)}
            previewUrl={mode === 'edit' ? selectedFood?.image : undefined}
          />
          {/* Name */}
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                {...field}
                className="w-full placeholder:text-sm placeholder:text-gray-light-500 border-gray-light-300"
                label="نام آیتم"
                placeholder="نام آیتم را وارد نمایید"
              />
            )}
          />
          {/* Meals */}
          <Controller
            control={control}
            name="meals"
            render={({ field }) => (
              <CustomSelect
                label="وعده"
                options={meal}
                isMulti
                {...field}
                placeholder="وعده را انتخاب نمایید"
              />
            )}
          />
          {/* Menus */}
          <Controller
            control={control}
            name="menus"
            render={({ field }) => (
              <CustomSelect
                label="منو"
                options={fakeOptions}
                isMulti
                {...field}
                placeholder="منو را انتخاب نمایید"
              />
            )}
          />
          {/* Categories */}
          <Controller
            control={control}
            name="categories"
            render={({ field }) => (
              <CustomSelect
                label="دسته بندی"
                options={fakeOptions}
                isMulti
                {...field}
                placeholder="دسته بندی را انتخاب نمایید"
              />
            )}
          />
          {/* Price */}
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <div dir="ltr" className="dv-price-input">
                <Input
                  {...field}
                  label="قیمت بسته‌بندی"
                  leadingTextValue="تومان"
                  inputType="leadingText"
                  labelClass="dv-price-label"
                  className="w-full placeholder:text-sm placeholder:text-gray-light-600"
                  placeholder="قیمت را وارد کنید"
                />
              </div>
            )}
          />
          {/* Description */}
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <TextArea
                {...field}
                label="توضیحات"
                className="max-h-[84px] placeholder:text-sm placeholder:text-gray-light-500"
                placeholder="توضیحات را وارد نمایید"
              />
            )}
          />
          {/* Daily Food Section */}
          <div className="border border-gray-light-200 p-xl bg-gray-light-50 rounded-xl flex flex-col gap-3xl">
            <div className="flex items-center gap-md">
              <Switch
                checked={isDailyFood}
                onToggle={() => setValue('isDailyFood', !isDailyFood)}
                className="data-[state=checked]:bg-utility-brand-600 cursor-pointer"
              />
              <p className="text-gray-light-700 text-sm">غذای روز</p>
            </div>
            {isDailyFood && (
              <div className="grid grid-cols-2 gap-xl">
                {weekDays.map((day) => (
                  <div key={day} className="flex items-center gap-md">
                    <Checkbox name={day} label={day} />
                  </div>
                ))}
              </div>
            )}
          </div>
          {selectedFood && (
            <div className="flex items-center gap-md border border-gray-light-200 p-xl bg-gray-light-50 rounded-xl">
              <Controller
                control={control}
                name="isVisible"
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onToggle={field.onChange}
                    className="data-[state=checked]:bg-utility-brand-600 cursor-pointer"
                  />
                )}
              />
              <p className="text-gray-light-700 text-sm">وضعیت نمایش در منو</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-xl p-3xl border-t border-gray-light-300">
          <Button
            type="button"
            onClick={handleClose}
            variant="secondaryGray"
            className="h-[44px] w-[150px]"
          >
            لغو
          </Button>
          <Button type="submit" className="w-[266px] bg-utility-brand-600">
            {mode === 'create' ? 'افزودن آیتم' : 'ویرایش آیتم'}
          </Button>
        </div>
      </form>
    </Sheet>
  );
}