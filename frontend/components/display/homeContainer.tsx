import { useState, useEffect } from 'react';

export default function HomeContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // ページ描画後にフェードイン開始
    setIsLoaded(true);
  }, []);

  return (
    <div
      id='top'
      // Tailwind CSS のユーティリティクラスでレイアウト・背景などを指定
      className={`relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[url('/images/starBack.webp')] bg-cover bg-fixed bg-center text-white ${isLoaded ? 'fadeIn' : 'opacity-0'}`}
    >
      <div className='star-layer-1'></div>
      <div className='star-layer-2'></div>
      <div className='star-layer-3'></div>
      <h1>Shunsuke&apos;s Portfolio</h1>
      <p>Welcome to my site</p>

      {/* アニメーション・疑似要素のスタイルを inline で定義 */}
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

        /* テキストを星の上に表示 */
        h1,
        p {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}
