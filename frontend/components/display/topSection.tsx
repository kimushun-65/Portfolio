'use client';

import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import RotatingText from './RotatingText';
import StarfieldBackground from './StarfieldBackground';

interface TopSectionProps {
  isLoaded: boolean;
}

export default function TopSection({ isLoaded }: TopSectionProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const topSection = document.getElementById('top');
      if (!topSection) return;

      const rect = topSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // スクロール進行度を計算（0から1）
      const progress = Math.max(0, Math.min(1, 1 - rect.bottom / windowHeight));
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // マウス位置を-1から1の範囲に正規化
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id='top'
      className={`relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-white ${isLoaded ? 'fadeIn' : 'opacity-0'}`}
    >
      {/* Three.js 3D背景 */}
      <div className='absolute inset-0 z-0'>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{
            background:
              'linear-gradient(to bottom, #050505 0%, #0d0d0d 50%, #121212 100%)',
          }}
        >
          <StarfieldBackground
            scrollProgress={scrollProgress}
            mousePosition={mousePosition}
          />
        </Canvas>
      </div>

      {/* 元の背景画像をオーバーレイとして薄く表示 */}
      <div
        className='absolute inset-0 z-0 bg-[url("/images/starBack.webp")] bg-cover bg-fixed bg-center opacity-10'
        style={{ mixBlendMode: 'soft-light' }}
      />

      {/* スクロールインジケーター */}
      <div className='scroll-down-indicator'>
        <span>Scroll to explore</span>
        <div className='arrow'></div>
      </div>

      {/* コンテンツ */}
      <div className='relative z-10 flex flex-col items-center justify-center px-4'>
        {/* メインタイトル */}
        <div className='mb-8 text-center'>
          <h1 className='mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl'>
            Shunsuke Kimura
          </h1>

          {/* ローテーションテキスト */}
          <div className='flex flex-col items-center justify-center gap-4 text-2xl text-gray-300 md:flex-row md:text-3xl'>
            <span className='font-light'>Engineer specializing in</span>
            <RotatingText
              words={[
                'Frontend Development',
                'Backend Systems',
                'AI & Machine Learning',
                'Project Management',
              ]}
              interval={3000}
            />
          </div>
        </div>

        {/* サブテキスト */}
        <p className='max-w-2xl text-center text-lg font-light leading-relaxed text-gray-400'>
          京都大学でAI・機械学習を研究しながら、
          <br className='hidden md:block' />
          株式会社StarUpでエンジニアをしています！
        </p>
      </div>
    </div>
  );
}
