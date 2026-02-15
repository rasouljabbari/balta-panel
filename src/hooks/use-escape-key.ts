import { useEffect } from 'react';

/**
 * Hook for handling Escape key press
 * @param callback - Function to call when Escape key is pressed
 * @param enabled - Whether the hook is enabled (default: true)
 */
export function useEscapeKey(
  callback: () => void,
  enabled: boolean = true,
): void {
  useEffect(() => {
    if (!enabled) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleEscape);

    return () => {
      // Cleanup event listener
      document.removeEventListener('keydown', handleEscape);
    };
  }, [callback, enabled]);
}
