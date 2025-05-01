import Image from 'next/image';

export default function WorkExperienceSection() {
  return (
    <div className='section work'>
      <h2 className='text-3xl font-bold'>Work Experience</h2>
      <div className='timeline-item'>
        <div className='mb-2 text-lg font-semibold text-blue-200'>
          2024/10〜現在
        </div>
        <div className='company flex items-center font-semibold'>
        <Image
            src='/images/starup.png'
            alt='Star Up Logo'
            width={32}
            height={32}
            className='ml-2 rounded-md mr-3'
          />
          株式会社 STAR UP
        </div>
        <p className='font-semibold mt-2'>
          受託開発事業部に在籍し、主にフロントエンドの開発を行っている。
        </p>
        <p className='font-semibold'>
          需要予測を組み込んだ発注ツールの開発を行っており、フロントエンドチームのリーダー兼PM補佐を務めている。またバックエンド開発にも一部携わっており幅広く活躍している。
        </p>
      </div>
    </div>
  );
}
