import { useEffect } from 'react';
import { cn } from '@/utils/cn';
import { createPortal } from 'react-dom';
import type { SheetProps } from './type';


export default function Sheet({
  open,
  onClose,
  side = 'left',
  width = '420px',
  children,
}: SheetProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        className={cn(
          'fixed inset-0 bg-black/60 transition-opacity duration-300 z-40 ',
          open ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
      />

      <div
        className={cn(
          'fixed top-0 h-screen bg-white shadow-2xl transition-transform duration-300 z-50',
          side === 'left' && 'left-0',
          side === 'right' && 'right-0',
          open
            ? 'translate-x-0'
            : side === 'left'
              ? '-translate-x-full'
              : 'translate-x-full',
        )}
        style={{ width }}
      >
        {children}
      </div>
    </>,
    document.body,
  );
}
