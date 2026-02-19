import { Check } from 'lucide-react';
import { Badge, Tabs } from 'rg-dst';
import type { TabsWithBadgesProps } from '../type';


export function TabsWithBadges({
  tabs,
  activeTab,
  setActiveTab,
}: TabsWithBadgesProps) {
  return (
    <div className="flex flex-col">
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
          {tabs.map((t, i) => {
            const colors: Array<'orange' | 'success' | 'purple'> = [
              'orange',
              'success',
              'purple',
            ];
            return (
              <Badge
                key={t.value}
                color={colors[i]}
                icon={<Check size={12} />}
                dir="ltr"
              >
                {t.label}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}
