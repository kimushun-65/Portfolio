import React from 'react';

const SummarySection: React.FC = () => {
  return (
    <div className='section summary'>
      <h2 className='text-3xl font-bold'>About</h2>

      {/* メインコンテンツカード */}
      <div className='rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 ring-1 ring-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:ring-cyan-500/30 md:p-10'>
        <div className='grid gap-8 md:grid-cols-2 md:gap-12'>
          {/* 左側：概要 */}
          <div className='space-y-6'>
            <div>
              <div className='mb-3 flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                <h3 className='text-xl font-semibold text-cyan-400'>研究</h3>
              </div>
              <p className='text-lg leading-relaxed text-gray-300'>
                大学院で機械学習を用いた金融市場の暴落検知の研究を行っている
              </p>
            </div>

            <div>
              <div className='mb-3 flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                <h3 className='text-xl font-semibold text-cyan-400'>
                  エンジニアリング
                </h3>
              </div>
              <p className='text-lg leading-relaxed text-gray-300'>
                プロジェクトマネジメントと共に、フロントエンド・バックエンド・インフラなどフルスタックなエンジニアとしても活動している
              </p>
            </div>
          </div>

          {/* 右側：ビジョン */}
          <div className='space-y-6'>
            <div>
              <div className='mb-3 flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                <h3 className='text-xl font-semibold text-cyan-400'>目標</h3>
              </div>
              <p className='text-lg leading-relaxed text-gray-300'>
                エンジニアとしてのフルスタックな知識はもちろん、PM、PDMとしての成長を目指している
              </p>
            </div>

            <div>
              <div className='mb-3 flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                <h3 className='text-xl font-semibold text-cyan-400'>
                  マイポリシー
                </h3>
              </div>
              <p className='text-lg leading-relaxed text-gray-300'>
                最小の時間で最大のバリューを出す。日々の圧倒的成長
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
