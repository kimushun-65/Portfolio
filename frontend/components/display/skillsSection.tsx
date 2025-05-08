import React from 'react';

// Star component to display skill level
const SkillStars = ({ level }: { level: number }) => {
  const stars = [];
  for (let i = 0; i < level; i++) {
    stars.push(
      <span key={i} className='inline-block text-yellow-400'>
        ★
      </span>,
    );
  }
  return <div className='mt-1 flex'>{stars}</div>;
};

// Skill item component
const SkillItem = ({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: string;
}) => {
  return (
    <div className='mb-4 flex flex-col items-center'>
      <div
        className={`rounded-full px-4 py-1 ${color} mb-1 font-semibold text-white`}
      >
        {name}
      </div>
      <SkillStars level={level} />
    </div>
  );
};

export default function SkillsSection() {
  // Frontend skills with levels
  const frontendSkills = [
    { name: 'React', level: 4, color: 'bg-pink-600 border border-pink-400' },
    { name: 'Next.js', level: 4, color: 'bg-pink-600 border border-pink-400' },
    {
      name: 'TypeScript',
      level: 4,
      color: 'bg-pink-600 border border-pink-400',
    },
  ];

  // Backend skills with levels
  const backendSkills = [
    {
      name: 'Python',
      level: 4,
      color: 'bg-purple-600 border border-purple-400',
    },
    {
      name: 'FastAPI',
      level: 3,
      color: 'bg-purple-600 border border-purple-400',
    },
    {
      name: 'Node.js',
      level: 4,
      color: 'bg-purple-600 border border-purple-400',
    },
    {
      name: 'Ruby on Rails',
      level: 2,
      color: 'bg-purple-600 border border-purple-400',
    },
  ];

  // Tools skills with levels
  const toolsSkills = [
    {
      name: 'MySQL',
      level: 2,
      color: 'bg-orange-500 border border-orange-300',
    },
    {
      name: 'Docker',
      level: 3,
      color: 'bg-orange-500 border border-orange-300',
    },
    { name: 'Git', level: 3, color: 'bg-orange-500 border border-orange-300' },
    {
      name: 'Firebase',
      level: 3,
      color: 'bg-orange-500 border border-orange-300',
    },
  ];

  return (
    <div className='section skills'>
      <h2 className='text-3xl font-bold'>Skills</h2>

      {/* Tips section */}
      <div className='mb-6 rounded-md border border-green-500 bg-gray-800 p-4'>
        <div className='mb-1 flex items-center'>
          <span className='mr-2 text-yellow-400'>💡</span>
          <span className='font-semibold text-white'>Tips</span>
        </div>
        <p className='text-sm text-gray-300'>
          ★が多いほど得意な技術 (min:1, max:5)
        </p>
      </div>

      {/* Frontend skills */}
      <div className='timeline-item mb-8'>
        <div className='mb-4 inline-block rounded-full bg-pink-600 px-6 py-2 font-semibold text-white'>
          Frontend
        </div>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {frontendSkills.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>
      </div>

      {/* Backend skills */}
      <div className='timeline-item mb-8'>
        <div className='mb-4 inline-block rounded-full bg-purple-600 px-6 py-2 font-semibold text-white'>
          Backend
        </div>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {backendSkills.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>
      </div>

      {/* Tools skills */}
      <div className='timeline-item mb-8'>
        <div className='mb-4 inline-block rounded-full bg-orange-500 px-6 py-2 font-semibold text-white'>
          Tools
        </div>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {toolsSkills.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
