import { useEffect } from 'react';

/**
 * Hook to disable/enable body scroll
 * @param disabled - Whether to disable scroll (default: true)
 */
export function useDisableScroll(disabled: boolean = true) {
  useEffect(() => {
    // Save previous overflow so we can restore it on cleanup
    const previousOverflow = document.body.style.overflow;

    if (disabled) {
      // Disable body scroll when component mounts / effect runs with disabled === true
      document.body.style.overflow = 'hidden';

      // Restore the previous overflow on cleanup (on unmount or before next effect run)
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    // If disabled === false we don't change overflow, but still return a cleanup
    // to restore previous value if needed (not strictly necessary here)
    return () => {
      // no-op (previousOverflow is the same as current in this branch)
      document.body.style.overflow = previousOverflow;
    };
  }, [disabled]);
}
