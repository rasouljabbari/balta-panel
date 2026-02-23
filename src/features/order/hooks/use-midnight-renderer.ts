import { useEffect, useState } from 'react';

export function useMidnightRerender() {
  const [, setTick] = useState(0);

  useEffect(() => {
    function schedule() {
      const now = new Date();

      const nextMidnight = new Date(now);
      nextMidnight.setHours(24, 0, 0, 0);

      const timeout = nextMidnight.getTime() - now.getTime();

      const timer = setTimeout(() => {
        setTick(t => t + 1); 
        schedule(); 
      }, timeout);

      return timer;
    }

    const timer = schedule();

    return () => clearTimeout(timer);
  }, []);
}