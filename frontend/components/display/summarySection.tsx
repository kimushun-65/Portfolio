import React from 'react';

const SummarySection: React.FC = () => {
  return (
    <div className='section summary'>
      <h2 className='text-3xl font-bold'>Summary</h2>
      <p className='font-semibold'>
        普段は大学院で機械学習を用いた金融市場の暴落検知の研究をしています。
      </p>
      <p className='font-semibold'>
        学業以外では1年ほどエンジニアをしており、主にフロントエンドの開発を行っています。
        設計から作成テストまで一通りの開発を経験しています。
      </p>
      <p className='font-semibold'>
        今後はバックエンドやインフラ、データサイエンスの知識を深め、フルスタックエンジニアとしてのスキルを高めていきたいと考えています。将来的には学んだ知識を活かして革新的なサービスを作りたいと思ってます。
      </p>
    </div>
  );
};

export default SummarySection;
