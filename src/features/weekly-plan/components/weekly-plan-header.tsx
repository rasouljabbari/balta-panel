import SectionHeader from "@/components/shared/section-header";
import type { TabType, WeeklyPlanHeaderProps } from "@/features/weekly-plan/types";
import { Tabs } from "dst-rg";
import { TABS } from "./data";


export default function WeeklyPlanHeader({
  tab,
  onTabChange,
  children,
}: WeeklyPlanHeaderProps) {
  return (
    <SectionHeader
      title="جدول برنامه غذایی هفتگی"
      extra={
        <Tabs value={tab} onValueChange={(v) => onTabChange(v as TabType)}>
          <Tabs.List
            listVariant="gray"
            className="max-w-[300px] h-11 border border-rborder-secondary p-xs rounded-lg bg-gray-light-100"
          >
            {TABS.map((item) => (
              <Tabs.Trigger
                key={item.value}
                value={item.value}
                triggerVariant="gray"
                fullWidth
                className="text-sm font-semibold data-[state=active]:text-utility-brand-600 data-[state=active]:bg-base-white rounded-lg data-[state=active]:shadow-sm w-[130px]"
              >
                {item.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs>
      }
    >
      {children}
    </SectionHeader>
  );
}
