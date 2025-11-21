export default function EducationSection() {
  return (
    <div className='section education'>
      <h2 className='text-3xl font-bold'>Education</h2>

      <div className='space-y-6'>
        {/* 大学院 */}
        <div className='rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 ring-1 ring-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:ring-cyan-500/30'>
          <div className='mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
            <div>
              <h3 className='text-2xl font-bold text-white'>
                京都大学大学院 情報学研究科
              </h3>
              <p className='mt-1 text-sm text-gray-400'>修士課程</p>
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
              <span className='font-semibold'>2025/4 〜</span>
            </div>
          </div>

          <div className='space-y-4'>
            <p className='text-lg leading-relaxed text-gray-300'>
              金融市場の暴落検知を研究。安定分布の特性指数αに着目し、機械学習を組み込むことで暴落検知の精度向上を目指している
            </p>
            <p className='text-lg leading-relaxed text-gray-300'>
              GitHub Actionsを活用したCI/CDパイプラインで、毎日の市場データを自動取得・分析し、異常を検知するシステムを構築した
            </p>
          </div>

          {/* 研究実績 */}
          <div className='mt-6 rounded-xl bg-black/20 p-4'>
            <div className='mb-2 flex items-center gap-2 text-gray-300'>
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
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                />
              </svg>
              <span className='font-semibold'>学会発表</span>
            </div>
            <p className='text-sm leading-relaxed text-gray-300'>
              応用数理学会
              (2025年3月)「安定分布ポートフォリオのリスク・リターン改善評価
              ー既存ポートフォリオとの比較検証ー」
            </p>
          </div>
        </div>

        {/* 学部 */}
        <div className='rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 ring-1 ring-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:ring-cyan-500/30'>
          <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
            <div>
              <h3 className='text-2xl font-bold text-white'>
                京都大学 工学部 情報学科
              </h3>
              <p className='mt-1 text-sm text-gray-400'>学士課程</p>
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
              <span className='font-semibold'>2021/4 〜 2025/3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
