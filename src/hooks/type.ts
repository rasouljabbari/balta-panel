import type { FieldValues, UseFormReset } from "react-hook-form";


export interface IChatMessage {
  id: string;
  me: boolean;
  message?: string;
  date: Date;
  attachment?: {
    name: string;
    size: number;
    url?: string;
    type: string;
  };
}

export interface UseResetOnCloseProps<T extends FieldValues> {
  reset: UseFormReset<T>;
  onClose: () => void;
  resetValues?: T;
}

export type ToggleState = {
  [key: string]: boolean;
};