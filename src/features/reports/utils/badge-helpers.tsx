import type { BadgeConfig } from '@/features/reports/type';

export const getPaymentStatusBadge = (status: string): BadgeConfig => {
  switch (status) {
    case 'paid':
      return { label: 'پرداخت شده', color: 'success' as const };
    case 'delayed':
      return { label: 'تسویه نشده', color: 'error' as const };
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
      };
    case 'unsuccessful':
      return { 
        label: 'ناموفق', 
        color: 'error' as const,
      };
    default:
      return { label: status, color: 'gray' as const };
  }
};