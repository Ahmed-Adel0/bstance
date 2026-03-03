import { useEffect, useRef, useState } from 'react';

export const useStatsCounter = (targetValue: number, prefix: string = '', suffix: string = '') => {
  const [count, setCount] = useState<string>(`${prefix}0${suffix}`);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasAnimated.current = true;
            let c = 0;
            const step = targetValue / 55;
            const iv = setInterval(() => {
              c = Math.min(c + step, targetValue);
              setCount(`${prefix}${Math.floor(c)}${suffix}`);
              if (c >= targetValue) {
                clearInterval(iv);
                setCount(`${prefix}${targetValue}${suffix}`);
              }
            }, 28);
            if (element) {
              observer.unobserve(element);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [targetValue, prefix, suffix]);

  return { count, elementRef };
};
