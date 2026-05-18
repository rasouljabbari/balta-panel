import { useMemo } from 'react';
import { useMenus } from '@/features/definition/hooks/menu';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from 'dst-rg';
import { EssentialIcon } from '@/components/icons/contract-icon';
import { Card, CardHeader } from '@/components/shared/card';
import { Skeleton } from '@/components/shared/skeleton-loader';

export default function ContractMenusCard() {
  const { control } = useFormContext();

  const { data: menusData, isLoading } = useMenus();

  const menuList = useMemo(() => {
    if (!menusData) return [];

    return menusData
      .filter((menu: any) => menu.is_active)
      .map((menu: any) => ({
        label: menu.name,
        value: menu.id,
      }));
  }, [menusData]);

  return (
    <div className="col-span-3">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-xl">
            <div className="flex items-center justify-center w-10 h-10 border border-gray-light-200 rounded-lg shadow-xs">
              <EssentialIcon />
            </div>

            <h2 className="text-lg font-semibold text-gray-light-900">
              منوهای قابل استفاده
            </h2>
          </div>
        </CardHeader>

        <Controller
          name="menus"
          control={control}
          render={({ field, fieldState }) => (
            <div className="p-3xl flex flex-col gap-lg">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-md">
                    <Skeleton width={20} height={20} rounded="sm" />
                    <Skeleton width="60%" height={16} />
                  </div>
                ))
              ) : menuList.length > 0 ? (
                menuList.map((menu) => {
                  const checked = field.value?.includes(menu.value);

                  return (
                    <Checkbox
                      key={menu.value}
                      id={`menu-${menu.value}`}
                      label={menu.label}
                      checked={checked}
                      disabled={!checked && (field.value?.length || 0) >= 2}
                      onChange={(e: any) => {
                        const isChecked = e?.target?.checked;

                        if (isChecked) {
                          if ((field.value?.length || 0) >= 2) return;

                          field.onChange([...(field.value || []), menu.value]);
                        } else {
                          field.onChange(
                            (field.value || []).filter(
                              (id: number) => id !== menu.value,
                            ),
                          );
                        }
                      }}
                      name=""
                    />
                  );
                })
              ) : (
                <span className="text-sm text-gray-light-400">
                  منویی ثبت نشده است
                </span>
              )}

              {fieldState.error && (
                <span className="text-sm text-rtext-error-primary-600 mt-2">
                  {fieldState.error.message}
                </span>
              )}
            </div>
          )}
        />
      </Card>
    </div>
  );
}
