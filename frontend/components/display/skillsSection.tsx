'use client';

import React, { useEffect, useRef, useState } from 'react';

// Progress bar component with animation
const SkillBar = ({
  name,
  level,
  color,
  delay = 0,
}: {
  name: string;
  level: number;
  color: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 },
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const percentage = (level / 5) * 100;

  return (
    <div ref={barRef} className='mb-6'>
      <div className='mb-2 flex items-center justify-between'>
        <span className='font-semibold text-white'>{name}</span>
        <span className='text-sm text-gray-400'>{level}/5</span>
      </div>
      <div className='h-3 overflow-hidden rounded-full bg-gray-700/50'>
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{
            width: isVisible ? `${percentage}%` : '0%',
          }}
        />
      </div>
    </div>
  );
};

export default function SkillsSection() {
  // Frontend skills with levels
  const frontendSkills = [
    {
      name: 'React',
      level: 4,
      color: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    },
    {
      name: 'Next.js',
      level: 4,
      color: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    },
    {
      name: 'TypeScript',
      level: 4,
      color: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    },
    {
      name: 'FSD Architecture',
      level: 4,
      color: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    },
  ];

  // Backend skills with levels
  const backendSkills = [
    {
      name: 'Python',
      level: 4,
      color: 'bg-gradient-to-r from-purple-400 to-pink-500',
    },
    {
      name: 'FastAPI',
      level: 4,
      color: 'bg-gradient-to-r from-purple-400 to-pink-500',
    },
    {
      name: 'Go',
      level: 3,
      color: 'bg-gradient-to-r from-purple-400 to-pink-500',
    },
    {
      name: 'Onion Architecture',
      level: 4,
      color: 'bg-gradient-to-r from-purple-400 to-pink-500',
    },
  ];

  // Tools skills with levels
  const toolsSkills = [
    {
      name: 'MySQL/PostgreSQL',
      level: 3,
      color: 'bg-gradient-to-r from-orange-400 to-red-500',
    },
    {
      name: 'AWS',
      level: 3,
      color: 'bg-gradient-to-r from-orange-400 to-red-500',
    },
    {
      name: 'Docker',
      level: 3,
      color: 'bg-gradient-to-r from-orange-400 to-red-500',
    },
    {
      name: 'Git',
      level: 3,
      color: 'bg-gradient-to-r from-orange-400 to-red-500',
    },
  ];

  return (
    <div className='section skills'>
      <h2 className='text-3xl font-bold'>Skills</h2>

      <div className='space-y-12'>
        {/* Frontend skills */}
        <div>
          <div className='mb-6 flex items-center gap-3'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-white'>Frontend</h3>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            {frontendSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Backend skills */}
        <div>
          <div className='mb-6 flex items-center gap-3'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-white'>Backend</h3>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            {backendSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Tools skills */}
        <div>
          <div className='mb-6 flex items-center gap-3'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-white'>Tools & Others</h3>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            {toolsSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
