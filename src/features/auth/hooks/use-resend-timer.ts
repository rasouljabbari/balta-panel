import { useCallback, useEffect, useMemo, useState } from 'react';

export function useResendTimer(initialSeconds: number = 60) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const canResend = useMemo(() => timeLeft === 0, [timeLeft]);

  const handleResend = useCallback(() => {
    setTimeLeft(initialSeconds);
  }, [initialSeconds]);

  return {
    timeLeft,
    canResend,
    handleResend,
  };
}
