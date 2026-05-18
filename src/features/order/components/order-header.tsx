import InfoHeader from "@/components/shared/info-header";
import { CartIcon } from "@/components/icons/order-icons";
import { Tabs } from 'dst-rg';
import type { TabType, OrderHeaderProps } from "@/features/order/types";
import { TABS } from "@/features/order/data";

export default function OrderHeader({
  tab,
  onTabChange,
}: OrderHeaderProps) {
  return (
    <InfoHeader
      icon={<CartIcon />}
      title="نمای کلی سفارش‌ها"
      className="justify-start"
    >
      <Tabs value={tab} onValueChange={(v) => onTabChange(v as TabType)} className="ms-5">
        <Tabs.List
          listVariant="gray"
          className="h-10 border border-rborder-secondary p-xs rounded-lg bg-gray-light-50"
        >
          {TABS.map((item) => (
            <Tabs.Trigger
              key={item.value}
              value={item.value}
              triggerVariant="gray"
              fullWidth
              className="text-sm font-semibold data-[state=active]:text-utility-brand-600 data-[state=active]:bg-base-white rounded-lg data-[state=active]:shadow-sm"
            >
              {item.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs>
    </InfoHeader>
  )
}