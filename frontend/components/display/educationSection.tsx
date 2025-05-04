export default function EducationSection() {
  return (
    <div className='section education'>
      <h2 className='text-3xl font-bold'>Education</h2>
      <div className='timeline-item'>
        <div className='mb-2 text-lg font-semibold text-blue-200'>2025/4~</div>
        <div className='text-lg font-semibold text-white'>
          京都大学大学院情報学研究科
        </div>
        <p className='font-semibold'>
          物理統計学分野に所属しており、金融市場の暴落検知の研究を行っている。安定分布の特性指数αに着目し、機械学習を組み込むことで暴落検知の精度を向上させる研究を行っている。githubactionsでCI/CDを行い毎日の市場データを自動で取得、更新を行い異常を検知するシステムを開発した。今後は異常検知の制度をさらに上げるようアルゴリズムの改善を行っている。
        </p>
        <p className='font-semibold'>
          2025年3月に応用数理学会で=安定分布ポートフォリオのリスク・リターン改善評価ー既存ポートフォリオの比較検証ーというテーマで学会発表を行なった。
        </p>
      </div>
      <div className='timeline-item'>
        <div className='mb-2 text-lg font-semibold text-blue-200'>
          2021/4~2025/3
        </div>
        <div className='text-lg font-semibold text-white'>
          京都大学工学部情報学科
        </div>
      </div>
    </div>
  );
}
