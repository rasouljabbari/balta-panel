import { useLocation } from 'react-router-dom';
import type { SidebarMenuProps } from '@/components/layout/sidebar/type';
import { sidebarMenuItems } from './data';
import SidebarMenuItem from './menu-item';

export default function SidebarMenu({ onItemClick }: SidebarMenuProps) {
  const pathname = useLocation().pathname;
  const isActive = (to?: string) => (to ? pathname.startsWith(to) : false);
  const isDashboardActive = pathname === '/';

  return (
    <div className="px-3xl pt-4xl flex flex-col items-start gap-6 w-full">
      <ul className="flex flex-col items-start gap-3 w-full">
        {sidebarMenuItems.map((item, index) => (
          <SidebarMenuItem
            key={item.to || index}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isActive={
              isActive(item.to) ||
              (item.to === '/dashboard' && isDashboardActive)
            }
            children={item.children}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </div>
  );
}
