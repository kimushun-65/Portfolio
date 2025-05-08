import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import '../styles/animations.css';
import '../styles/layout.css';
import '../styles/timeline.css';
import '../styles/scrollIndicator.css';
import EducationSection from './educationSection';
import FooterSection from './footerSection';
import SkillsSection from './skillsSection';
import SummarySection from './summarySection';
import TopSection from './topSection';
import WorkExperienceSection from './workExperienceSection';
import WorkSection from './workSection';

export default function HomeContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useIntersectionObserver(setIsLoaded);

  return (
    <div className='scroll-behavior: smooth; overflow-y: auto; height: 100vh;'>
      <TopSection isLoaded={isLoaded} />
      <div className='content-section'>
        <ul className='squares'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className='timeline'>
          <SummarySection />
          <WorkExperienceSection />
          <EducationSection />
          <WorkSection />
          <SkillsSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
}
