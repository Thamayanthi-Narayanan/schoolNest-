import { useEffect, useRef, useState } from 'react';

export function useWordRevealInView(words, intervalMs = 130, startDelayMs = 200) {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return undefined;

    let wordIndex = 0;
    let intervalId = null;

    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        wordIndex += 1;
        setVisibleCount(wordIndex);

        if (wordIndex >= words.length) {
          clearInterval(intervalId);
        }
      }, intervalMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [hasStarted, words.length, intervalMs, startDelayMs]);

  return { sectionRef, visibleCount };
}
