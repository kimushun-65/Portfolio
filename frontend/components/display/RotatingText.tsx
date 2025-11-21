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

  // 各単語に対応するグラデーションカラー
  const gradients = [
    'from-cyan-400 to-blue-500', // Frontend Development - シアン→青
    'from-purple-400 to-pink-500', // Backend Systems - 紫→ピンク
    'from-green-400 to-emerald-500', // AI & Machine Learning - 緑→エメラルド
    'from-orange-400 to-red-500', // Project Management - オレンジ→赤
  ];

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
        className={`inline-block bg-gradient-to-r ${gradients[currentIndex]} bg-clip-text text-transparent transition-all duration-500 ${
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
