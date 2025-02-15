import { useState, useEffect } from 'react';

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
        </div>
      </div>

      <style jsx>{`
        /* フェードインアニメーション */
        .fadeIn {
          animation: fadeIn 1.5s ease forwards;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* コンテンツセクション */
        .content-section {
          position: relative;
          min-height: 100vh;
          background-color: #000;
          color: #fff;
          padding: 4rem 2rem;
          margin-top: 20vh;
          box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.5);
          z-index: 2;
        }

        #top {
          position: sticky;
          top: 0;
          z-index: 1;
          height: 100vh;
          transform-style: preserve-3d;
          transform: translateZ(0);
        }

        /* スクロールダウンインジケーター */
        .scroll-down-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: bounce 2s infinite;
          color: #fff;
        }

        .scroll-down-indicator span {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
        }

        .arrow {
          width: 20px;
          height: 20px;
          border-right: 2px solid #fff;
          border-bottom: 2px solid #fff;
          transform: rotate(45deg);
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-20px) translateX(-50%);
          }
          60% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        /* タイムライン */
        .timeline {
          max-width: 800px;
          margin: 0 auto;
        }

        .section {
          margin-bottom: 4rem;
          padding-left: 2rem;
          border-left: 2px solid #00ffff;
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.5s,
            transform 0.5s;
        }

        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        h2 {
          color: #00ffff;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .timeline-item {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -2.5rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background-color: #00ffff;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
