import { toast, type Id } from 'react-toastify';

const activeToasts = new Map<string, Id>();

export const showUniqueErrorToast = (message: string) => {
  if (activeToasts.has(message)) return;

  const id = toast.error(message, {
    onClose: () => {
      activeToasts.delete(message);
    },
  });

  activeToasts.set(message, id);
};
