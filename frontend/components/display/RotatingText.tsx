'use client';

import { useEffect, useState } from 'react';

interface RotatingTextProps {
  words: string[];
  interval?: number;
}

export default function RotatingText({
  words,
  interval = 3000,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className='relative inline-block min-w-[200px]'>
      <span
        className={`inline-block transition-all duration-500 ${
          isAnimating
            ? 'translate-y-[-20px] opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
