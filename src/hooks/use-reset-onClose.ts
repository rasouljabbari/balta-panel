import { useCallback } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { UseResetOnCloseProps } from './type';


export function useResetOnClose<T extends FieldValues>({
  reset,
  onClose,
  resetValues,
}: UseResetOnCloseProps<T>) {
  const handleClose = useCallback(() => {
    if (resetValues) {
      reset(resetValues);
    } else {
      reset();
    }

    onClose();
  }, [reset, onClose, resetValues]);

  return handleClose;
}
