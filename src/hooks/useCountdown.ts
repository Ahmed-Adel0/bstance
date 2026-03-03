import { useState, useEffect } from 'react';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const end = new Date(targetDate).getTime();

    const tick = () => {
      const now = new Date().getTime();
      let d = Math.max(0, end - now);

      const days = Math.floor(d / 86400000);
      d -= days * 86400000;
      const hours = Math.floor(d / 3600000);
      d -= hours * 3600000;
      const minutes = Math.floor(d / 60000);
      d -= minutes * 60000;
      const seconds = Math.floor(d / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    tick(); // Initial call
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};
