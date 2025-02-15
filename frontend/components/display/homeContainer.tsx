import { useState, useEffect } from 'react';
import '../styles/animations.css';
import '../styles/layout.css';
import '../styles/timeline.css';
import '../styles/scrollIndicator.css';
import TopSection from './topSection';
import SummarySection from './summarySection';
import WorkSection from './workSection';
import EducationSection from './educationSection';
import SkillsSection from './skillsSection';
import FooterSection from './footerSection';

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
      <TopSection isLoaded={isLoaded} />
      <div className='content-section'>
        <div className='timeline'>
          <SummarySection />
          <WorkSection />
          <EducationSection />
          <SkillsSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
}
