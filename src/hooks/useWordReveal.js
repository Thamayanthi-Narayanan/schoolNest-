import { useEffect, useState } from 'react';

export function useWordReveal(words, intervalMs = 140, startDelayMs = 400) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
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
  }, [words.length, intervalMs, startDelayMs]);

  return visibleCount;
}
