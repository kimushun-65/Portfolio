import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import '../styles/animations.css';
import '../styles/layout.css';
import '../styles/timeline.css';
import '../styles/scrollIndicator.css';
import EducationSection from './educationSection';
import FooterSection from './footerSection';
import Header from './Header';
import SkillsSection from './skillsSection';
import SummarySection from './summarySection';
import TopSection from './topSection';
import WorkExperienceSection from './workExperienceSection';
import WorkSection from './workSection';

export default function HomeContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useIntersectionObserver(setIsLoaded);

  return (
    <div className='relative scroll-behavior: smooth; overflow-y: auto; height: 100vh;'>
      <Header />
      <TopSection isLoaded={isLoaded} />
      <div className='content-section relative z-10'>
        <div className='timeline'>
          <div id='about'>
            <SummarySection />
          </div>
          <div id='work-experience'>
            <WorkExperienceSection />
          </div>
          <div id='education'>
            <EducationSection />
          </div>
          <div id='works'>
            <WorkSection />
          </div>
          <div id='skills'>
            <SkillsSection />
          </div>
        </div>
        <FooterSection />
      </div>
    </div>
  );
}
