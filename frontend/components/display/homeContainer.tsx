import { useState, useEffect } from 'react';
import '../styles/animations.css';
import '../styles/layout.css';
import '../styles/timeline.css';
import '../styles/scrollIndicator.css';

export default function HomeContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // ページ描画後にフェードイン開始
    setIsLoaded(true);

    // スクロールアニメーション用のIntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    // セクションの監視を開始
    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });

    // クリーンアップ関数
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='scroll-behavior: smooth; overflow-y: auto; height: 100vh;'>
      <div
        id='top'
        className={`relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[url('/images/starBack.webp')] bg-cover bg-fixed bg-center text-white ${isLoaded ? 'fadeIn' : 'opacity-0'}`}
      >
        <div className='scroll-down-indicator'>
          <span>Scroll Down</span>
          <div className='arrow'></div>
        </div>
        <h1 className='mb-4 text-4xl font-bold'>Shunsuke&apos;s Portfolio</h1>
        <p className='text-xl'>Welcome to my site</p>
      </div>

      <div className='content-section'>
        <div className='timeline'>
          <div className='section summary'>
            <h2>Summary</h2>
            <p>
              新卒以来2年以上フロントエンドエンジニアとして活動し、実務経験を積んできました。
            </p>
            <p>
              主に学術系のWebアプリケーションの開発に携わり、ユーザーの研究活動をより効率的にするためのUI/UX設計・実装を行ってきました。
            </p>
          </div>

          <div className='section work'>
            <h2>Work Experience</h2>
            <div className='timeline-item'>
              <div className='mb-2 text-sm text-cyan-400'>2022/4〜現在</div>
              <div className='company'>株式会社 STAR UP</div>
              <p>
                研究者向けWebアプリ開発に従事。主にフロントエンドを担当している。
                ユーザーの研究活動をサポートし、データの可視化や分析機能の実装を行っている。
              </p>
            </div>
          </div>

          <div className='section education'>
            <h2>Education</h2>
            <div className='timeline-item'>
              <div className='mb-2 text-sm text-cyan-400'>2020/4-2022/3</div>
              <div className='text-lg text-white'>京都大学工学研究科</div>
            </div>
            <div className='timeline-item'>
              <div className='mb-2 text-sm text-cyan-400'>2016/4-2020/3</div>
              <div className='text-lg text-white'>京都大学工学部情報学科</div>
            </div>
          </div>
          <div className='section work'>
            <h2>Work Experience</h2>
            <p>React, TypeScript, Next.js, Tailwind CSS, Node.js, Express</p>
          </div>
          <div className='section skills'>
            <h2>Skills</h2>
            <p>React, TypeScript, Next.js, Tailwind CSS, Node.js, Express</p>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <p>© 2025 Shunsuke&apos;s Portfolio</p>
        </div>
      </div>
    </div>
  );
}
