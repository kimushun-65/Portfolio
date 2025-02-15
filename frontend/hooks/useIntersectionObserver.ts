import { useEffect } from 'react';

export const useIntersectionObserver = (
  setIsLoaded: (value: boolean) => void,
) => {
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
  }, [setIsLoaded]);
};
