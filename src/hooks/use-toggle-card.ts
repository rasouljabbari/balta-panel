import { useCallback, useState } from 'react';
import type { ToggleState } from './type';


export function useToggleCards(initialState: ToggleState = {}) {
  const [openStates, setOpenStates] = useState<ToggleState>(initialState);

  const toggle = useCallback((key: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const open = useCallback((key: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: true,
    }));
  }, []);

  const close = useCallback((key: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: false,
    }));
  }, []);

  return { openStates, toggle, open, close };
}
