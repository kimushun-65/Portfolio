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
      className={`relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[url('/images/starBack.png')] bg-cover bg-fixed bg-center text-white ${isLoaded ? 'fadeIn' : 'opacity-0'}`}
    >
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

        /* 星空エフェクト用の ::after 擬似要素 */
        .relative::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          pointer-events: none;
          background-repeat: repeat;
          background-image:
            radial-gradient(
              2px 2px at 20% 20%,
              rgba(255, 255, 255, 0.5),
              transparent
            ),
            radial-gradient(
              2px 2px at 80% 80%,
              rgba(255, 255, 255, 0.5),
              transparent
            );
          animation: twinkle 5s infinite;
          z-index: 1;
        }
        @keyframes twinkle {
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
