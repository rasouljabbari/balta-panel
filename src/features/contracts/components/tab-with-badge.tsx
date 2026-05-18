import { Check } from 'lucide-react';
import { Badge, Tabs } from 'dst-rg';
import type { TabsWithBadgesProps } from '../type';


export function TabsWithBadges({
  tabs,
  activeTab,
  setActiveTab,
  contractSettings = [],
}: TabsWithBadgesProps) {
  const existingMeals = contractSettings.map((item) => item.meal_translation);

  return (
    <div className="flex items-center justify-between">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List
          listVariant="gray"
          className="h-11 w-full border border-gray-light-200 px-xs py-lg rounded-lg bg-gray-light-100"
        >
          {tabs.map((t) => (
            <Tabs.Trigger
              key={t.value}
              value={t.value}
              triggerVariant="gray"
              fullWidth
              className="
                w-[100px] text-sm font-semibold
                data-[state=active]:text-utility-brand-600
                data-[state=active]:bg-base-white
                px-2xl py-xl rounded-lg
              "
            >
              {t.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs>

      <div className="flex items-center gap-md">
        {existingMeals.includes('صبحانه') && (
          <Badge color="orange" icon={<Check size={12} />} dir="ltr">
            صبحانه
          </Badge>
        )}

        {existingMeals.includes('ناهار') && (
          <Badge color="success" icon={<Check size={12} />} dir="ltr">
            ناهار
          </Badge>
        )}

        {existingMeals.includes('شام') && (
          <Badge color="purple" icon={<Check size={12} />} dir="ltr">
            شام
          </Badge>
        )}
      </div>
    </div>
  );
}