import Image from 'next/image';

export default function WorkExperienceSection() {
  return (
    <div className='section work'>
      <h2 className='text-3xl font-bold'>Work Experience</h2>

      <div className='rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 ring-1 ring-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:ring-cyan-500/30'>
        {/* ヘッダー */}
        <div className='mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div className='flex items-center gap-4'>
            <div className='relative h-16 w-16 overflow-hidden rounded-xl bg-white p-2'>
              <Image
                src='/images/starup-new.png'
                alt='Star Up Logo'
                width={48}
                height={48}
                className='object-contain'
              />
            </div>
            <div>
              <a
                href='https://www.starup01.jp/'
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center gap-2 transition-colors'
              >
                <h3 className='text-2xl font-bold text-white transition-colors group-hover:text-cyan-400'>
                  株式会社 STAR UP
                </h3>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
              <p className='mt-1 text-sm text-gray-400'>
                ソフトウェアエンジニア
              </p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-cyan-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            <span className='font-semibold'>2024/10 〜 現在</span>
          </div>
        </div>

        {/* 説明 */}
        <div className='space-y-4'>
          <p className='text-lg leading-relaxed text-gray-300'>
            AI-Solution事業部でPMをやりつつ、Archaive事業部ではフロントエンドの責任者としてプロダクト開発に携わっている
          </p>
        </div>

        {/* 役割タグ */}
        <div className='mt-6 flex flex-wrap gap-2'>
        <span className='rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400 ring-1 ring-blue-500/20'>
            PM
          </span>
          <span className='rounded-lg bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-400 ring-1 ring-purple-500/20'>
            Frontend Lead
          </span>
          <span className='rounded-lg bg-green-500/10 px-3 py-1.5 text-sm font-medium text-green-400 ring-1 ring-green-500/20'>
            Backend Development
          </span>
        </div>
      </div>
    </div>
  );
}
