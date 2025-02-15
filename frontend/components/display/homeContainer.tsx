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
    <div className='scroll-container'>
      <div
        id='top'
        className={`relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[url('/images/starBack.webp')] bg-cover bg-fixed bg-center text-white ${isLoaded ? 'fadeIn' : 'opacity-0'}`}
      >
        <div className='scroll-down-indicator'>
          <span>Scroll Down</span>
          <div className='arrow'></div>
        </div>
        <div className='star-layer-1'></div>
        <div className='star-layer-2'></div>
        <div className='star-layer-3'></div>
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
              <div className='date'>2022/4〜現在</div>
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
              <div className='date'>2020/4-2022/3</div>
              <div className='school'>京都大学工学研究科</div>
            </div>
            <div className='timeline-item'>
              <div className='date'>2016/4-2020/3</div>
              <div className='school'>京都大学工学部情報学科</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-container {
          scroll-behavior: smooth;
          overflow-y: auto;
          height: 100vh;
        }

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

        /* 星空の背景レイヤー */
        .star-layer-1,
        .star-layer-2,
        .star-layer-3 {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          pointer-events: none;
          background-repeat: repeat;
        }

        /* 一番遠い星のレイヤー */
        .star-layer-1 {
          background-image:
            radial-gradient(
              1px 1px at 10% 10%,
              #fff 10%,
              rgba(255, 255, 255, 0.8) 20%,
              rgba(255, 255, 255, 0.2) 40%,
              transparent 100%
            ),
            radial-gradient(
              1px 1px at 30% 40%,
              #fff 10%,
              rgba(255, 255, 255, 0.8) 20%,
              rgba(255, 255, 255, 0.2) 40%,
              transparent 100%
            );
          animation: moveBackground 150s linear infinite;
          opacity: 0.5;
        }

        /* 中間の星のレイヤー */
        .star-layer-2 {
          background-image:
            radial-gradient(
              2px 2px at 50% 60%,
              #fff 10%,
              rgba(255, 255, 255, 0.8) 20%,
              rgba(255, 255, 255, 0.2) 40%,
              transparent 100%
            ),
            radial-gradient(
              2px 2px at 70% 20%,
              #fff 10%,
              rgba(255, 255, 255, 0.8) 20%,
              rgba(255, 255, 255, 0.2) 40%,
              transparent 100%
            );
          animation: moveBackground 100s linear infinite;
          opacity: 0.7;
        }

        /* 一番近い星のレイヤー */
        .star-layer-3 {
          background-image:
            radial-gradient(
              3px 3px at 20% 30%,
              #fff 10%,
              rgba(255, 255, 255, 0.9) 20%,
              rgba(255, 255, 255, 0.3) 40%,
              transparent 100%
            ),
            radial-gradient(
              3px 3px at 80% 50%,
              #fff 10%,
              rgba(255, 255, 255, 0.9) 20%,
              rgba(255, 255, 255, 0.3) 40%,
              transparent 100%
            );
          animation: moveBackground 50s linear infinite;
          opacity: 0.9;
        }

        /* 背景の移動アニメーション */
        @keyframes moveBackground {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(2%, 2%) rotate(2deg);
          }
          50% {
            transform: translate(0, 4%) rotate(0deg);
          }
          75% {
            transform: translate(-2%, 2%) rotate(-2deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
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

        .date {
          color: #00ffff;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
