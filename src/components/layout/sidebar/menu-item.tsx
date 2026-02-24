import type { SidebarMenuItemProps } from '@/components/layout/sidebar/type';
import { cn } from '@/utils/cn';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SidebarMenuItem({
  icon,
  label,
  to,
  isActive,
  children,
  isChild = false,
  onItemClick,
}: SidebarMenuItemProps) {

  const pathname = useLocation().pathname;

  const [isHover, setIsHover] = useState(false);

  // Check if any child is active
  const hasActiveChild = children?.some(
    (child) => child.to && pathname === child.to,
  );

  // Initialize expanded state based on whether a child is active
  const [isExpanded, setIsExpanded] = useState(hasActiveChild || false);

  const renderIcon = () => {
    if (typeof icon === 'function') {
      return icon(isActive || isHover);
    }
    return icon;
  };

  // If item has children (submenu)
  if (children && children.length > 0) {
    return (
      <li className="w-full">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={cn(
            'w-full py-2 px-3 flex items-center gap-3 hover:text-utility-brand-600 hover:bg-rbg-brand-primary/60 rounded-lg transition-all duration-200',
            isActive
              ? 'text-utility-brand-600 bg-rbg-brand-primary/60'
              : 'text-utility-gray-700',
          )}
        >
          {renderIcon()}
          <span
            className={cn(
              'font-semibold flex-1 text-right',
              isChild ? 'text-sm' : 'text-base',
            )}
          >
            {label}
          </span>
          <ChevronDown
            className={cn(
              'w-5 h-5 transition-transform duration-200',
              isExpanded ? 'rotate-180' : '',
            )}
          />
        </button>

        {/* Submenu */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isExpanded ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0',
          )}
        >
          <ul className="flex flex-col gap-1 pr-6">
            {children?.map((child, index) => (
              <SidebarMenuItem
                key={child.to || index}
                label={child.label}
                to={child.to}
                isActive={child.to ? pathname === child.to : false}
                isChild={true}
                onItemClick={onItemClick}
              />
            ))}
          </ul>
        </div>
      </li>
    );
  }

  // Regular menu item without children
  return (
    <li
      className="w-full"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link
        to={to || '#'}
        aria-label={to}
        onClick={onItemClick}
        className={cn(
          'py-2 px-3 flex items-center gap-3 hover:text-utility-brand-600 hover:bg-rbg-brand-primary/60 rounded-lg transition-all duration-200',
          isActive
            ? 'text-utility-brand-600 bg-rbg-brand-primary/60'
            : 'text-utility-gray-700',
        )}
      >
        {renderIcon()}
        <span
          className={cn('font-semibold', isChild ? 'text-sm' : 'text-base')}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
