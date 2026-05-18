import type { BadgeConfig } from '@/features/reports/type';
import { X, Check } from 'lucide-react';

export const getPaymentStatusBadge = (status: string): BadgeConfig => {
  switch (status) {
    case 'paid':
      return { label: 'پرداخت شده', color: 'success' as const, icon: (
        <Check className="w-4 h-4" />
      ) };
    case 'delayed':
      return { label: 'تسویه نشده', color: 'error' as const, icon: (
        <X className="w-[13px] h-[13px]" />
      ) };
    default:
      return { label: status, color: 'gray' as const };
  }
};

export const getDeliveryStatusBadge = (status: string): BadgeConfig => {
  switch (status) {
    case 'successful':
      return { 
        label: 'موفق', 
        color: 'success' as const,
        icon: (
          <Check className="w-4 h-4" />
        )
      };
    case 'unsuccessful':
      return { 
        label: 'ناموفق', 
        color: 'error' as const,
        icon: (
          <X className="w-[13px] h-[13px]" />
        )
      };
    default:
      return { label: status, color: 'gray' as const };
  }
};