import CustomSelect from '@/components/shared/custom-select';
import Sheet from '@/components/shared/sheet';
import { DEFAULT_VALUES, meal, weekDays } from '@/features/food/constants';
import { useCreateFood } from '@/features/food/hooks/use-create-food';
import { useShowFood } from '@/features/food/hooks/use-show-food';
import { useUpdateFood } from '@/features/food/hooks/use-update-food';
import { useResetOnClose } from '@/hooks/use-reset-onClose';
import { normalizeNumericInput, numericInputProps } from '@/utils/numeric-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Input, Switch, TextArea } from 'dst-rg';
import { CirclePlus, X } from 'lucide-react';
import { useEffect } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import type { FoodFormValues, SheetFormProps } from '../type';
import CategoriesSelect from './category-select';
import ImageUploadPreview from './image-upload-file';
import MenusSelect from './menu-select';
import { foodSheetSchema } from './validation';

export default function FoodSheet({ open, onClose, mode, foodId }: SheetFormProps) {
  const { mutate: createFood, isPending: isCreatingFood } = useCreateFood(onClose);
  const { mutate: updateFood, isPending: isUpdatingFood } = useUpdateFood(onClose);
  const isLoading = isCreatingFood || isUpdatingFood;
  const { data: food } = useShowFood(foodId);
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(foodSheetSchema),
  });

  const mealOptions = meal.map((m) => ({
    value: m.id, label: m.name,
  }));

  const mapFoodToForm = (food: any): any => ({
    name: food.name ?? '',
    meal_types: food.meal_types?.map((m: any) => m.id) ?? [],
    menu_ids: Array.isArray(food.menus)
      ? food.menus.map((item: any) => Number(item.id))
      : [],
    category_id: food.category?.id,
    price: String(food.price ?? ''),
    description: food.description ?? '',
    is_daily: food.is_daily ?? false,
    days: Array.isArray(food.days)
      ? food.days.map((d: any) => d.day)
      : [],
    image: null,
    is_active: food.is_active ?? true,
  });

  useEffect(() => {
    if (!open) return;
    if (mode === 'edit' && food) {
      reset(mapFoodToForm(food));
    }
    if (mode === 'create') {
      reset(DEFAULT_VALUES);
    }
  }, [open, mode, food, reset]);

  const handleClose = useResetOnClose<FoodFormValues>({
    reset,
    onClose,
    resetValues:
      mode === 'edit' && food
        ? mapFoodToForm(food)
        : DEFAULT_VALUES,
  });

  const [isDailyFood, imageFile] = useWatch({
    control,
    name: ['is_daily', 'image'],
  });

  const onSubmit = (data: FoodFormValues) => {
    if (mode === 'create') {
      createFood(data);
    } else {
      updateFood({
        ...data,
        id: String(foodId),
      });
    }
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
            previewUrl={mode === 'edit' ? food?.image : undefined}
          />
          {errors.image?.message && (
            <p className="text-rtext-error-primary-600 text-sm">{errors.image?.message as string}</p>
          )}

          {/* Name */}
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                {...field}
                label="نام آیتم"
                placeholder="نام آیتم را وارد نمایید"
                required
                destructive={!!errors.name}
                destructiveText={errors.name?.message}
                className="w-full placeholder:text-sm placeholder:text-gray-light-500 border-gray-light-300"
              />
            )}
          />

          {/* Meals */}
          <Controller
            control={control}
            name="meal_types"
            render={({ field }) => {
              const selectedIds: number[] = Array.isArray(field.value)
                ? field.value
                : [];

              return (
                <CustomSelect
                  options={mealOptions}
                  isMulti
                  label="وعده"
                  placeholder="وعده را انتخاب نمایید"
                  required
                  error={errors.meal_types?.message}

                  value={mealOptions.filter((m) =>
                    selectedIds.includes(Number(m.value))
                  )}

                  onChange={(options) => {
                    const ids = Array.isArray(options)
                      ? options.map((o) => Number(o.value))
                      : [];
                    field.onChange(ids);
                  }}
                />
              );
            }}
          />

          {/* Menus */}
          <MenusSelect control={control} error={errors.menu_ids?.message} />

          {/* Categories */}
          <CategoriesSelect
            control={control}
            error={errors.category_id?.message}
          />

          {/* Price */}
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <div dir="ltr" className="dv-price-input">
                <Input
                  {...field}
                  label="قیمت "
                  leadingTextValue="تومان"
                  inputType="leadingText"
                  labelClass="dv-price-label"
                  className="w-full placeholder:text-sm placeholder:text-gray-light-600"
                  placeholder="قیمت را وارد کنید"
                  {...numericInputProps}
                  required
                  destructive={!!errors.price}
                  destructiveText={errors.price?.message}
                  onChange={(e: any) => {
                    const next = normalizeNumericInput(e?.target?.value);
                    field.onChange(next);
                  }}
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
                placeholder="توضیحات را وارد نمایید"
                destructive={!!errors.description}
                destructiveText={errors.description?.message}
              />
            )}
          />

          {/* Daily Food Section */}
          <div className="border border-gray-light-200 p-xl bg-gray-light-50 rounded-xl flex flex-col gap-3xl">
            <div className="flex items-center gap-md">
              <Switch
                checked={isDailyFood}
                onToggle={() => setValue('is_daily', !isDailyFood)}
                className="data-[state=checked]:bg-utility-brand-600 cursor-pointer"
              />
              <p className="text-gray-light-700 text-sm">غذای روز</p>
            </div>
            {isDailyFood && (
              <div className="grid grid-cols-2 gap-xl">
                {weekDays.map((day) => (
                  <div key={day.day} className="flex items-center gap-md">
                    <Controller
                      control={control}
                      name="days"
                      render={({ field }) => {
                        const selectedDays = field.value ?? [];
                        const isChecked = selectedDays.includes(day.day);

                        const toggleDay = (checked: boolean) => {
                          if (checked) {
                            if (!selectedDays.includes(day.day)) {
                              field.onChange([...selectedDays, day.day]);
                            }
                            return;
                          }

                          field.onChange(
                            selectedDays.filter((selectedDay: string) => selectedDay !== day.day),
                          );
                        };

                        return (
                          <Checkbox
                            id={`week-day-${day.day}`}
                            name={day.day}
                            label={day.day_translated}
                            checked={isChecked}
                            onChange={(event: any) => {
                              toggleDay(Boolean(event?.target?.checked));
                            }}
                            onClick={() => toggleDay(!isChecked)}
                          />
                        );
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {errors.days?.message && (
            <p className="text-rtext-error-primary-600 text-sm">
              {errors.days.message as string}
            </p>
          )}

          {/* Visibility */}
          {mode === 'edit' && (
            <div className="flex items-center gap-md border border-gray-light-200 p-xl bg-gray-light-50 rounded-xl">
              <Controller
                control={control}
                name="is_active"
                render={({ field }) => (
                  <Switch
                    checked={!!field.value}
                    onToggle={() => {
                      const checked = !field.value;
                      field.onChange(checked);
                    }}
                    className="data-[state=checked]:bg-utility-brand-600 cursor-pointer"
                  />
                )}
              />
              <p className="text-gray-light-700 text-sm">وضعیت نمایش در منو</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-xl p-3xl border-t border-gray-light-300">
          <Button
            type="button"
            onClick={handleClose}
            variant="secondaryGray"
            className="h-[44px] w-[150px]"
            disabled={isLoading}
          >
            لغو
          </Button>
          <Button type="submit" className="w-[266px] bg-utility-brand-600" disabled={isLoading}>
            {mode === 'create' ? 'افزودن آیتم' : 'ویرایش آیتم'}
          </Button>
        </div>
      </form>
    </Sheet>
  );
}