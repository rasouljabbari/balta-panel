import { useEffect, useState } from 'react';

export function useAnimatedModal(isOpen: boolean) {
  const [visible, setVisible] = useState(false);
  const [showPortal, setShowPortal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setShowPortal(true);

      const timer = setTimeout(() => {
        setVisible(true);
      }, 50);

      document.body.style.overflow = 'hidden';

      return () => clearTimeout(timer);
    } else {
      setVisible(false);
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!visible) {
      setShowPortal(false);
    }
  };

  return {
    visible,
    showPortal,
    handleTransitionEnd,
  };
}
