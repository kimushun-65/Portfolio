import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  imageSrc,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageSrc: string;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 p-4'
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className='relative max-h-[90vh] w-full max-w-4xl translate-x-0 translate-y-0 transform overflow-y-auto rounded-lg bg-gray-800 shadow-xl'
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute right-4 top-4 z-10 rounded-full bg-gray-800 bg-opacity-70 p-2 text-gray-400 hover:text-white'
          onClick={onClose}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <div className='relative w-full' style={{ height: '60vh' }}>
          <Image src={imageSrc} alt={title} fill className='object-contain' />
        </div>

        <div className='p-6'>
          <h2 className='mb-4 text-2xl font-bold'>{title}</h2>
          <p className='whitespace-pre-line text-gray-200'>{description}</p>
        </div>
      </div>
    </div>
  );
};

const WorkItem = ({
  title,
  description,
  imageSrc,
  onClick,
}: {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
}) => {
  return (
    <div className='overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl'>
      <div className='relative h-48 w-full'>
        <Image src={imageSrc} alt={title} fill className='object-cover' />
      </div>
      <div className='p-4'>
        <h3 className='mb-2 text-xl font-bold'>{title}</h3>
        <button
          className='mt-2 flex items-center rounded-md bg-blue-200 px-4 py-2 text-black transition-colors duration-200 hover:bg-blue-700'
          onClick={onClick}
        >
          <span>詳細</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ml-2 h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function WorkSection() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const works = [
    {
      id: 1,
      title: 'ポートフォリオサイト',
      description:
        'Next.js、TypeScript、Tailwind CSSを使用して作成した自己紹介用のポートフォリオサイト。レスポンシブデザインを採用し、様々なデバイスで最適な表示を実現。アニメーションやインタラクティブな要素を取り入れ、ユーザー体験を向上させています。\n\n主な機能:\n・レスポンシブデザイン\n・スムーズスクロール\n・アニメーション効果\n\n使用技術:\n・Next.js\n・TypeScript\n・Tailwind CSS',
      imageSrc: '/images/portfolio.png',
    },
    {
      id: 2,
      title: '発注システム',
      description:
        'インターン先で開発した、ECサイト向け需要予測機能を組み込んだ発注管理ツール。フロントエンドのメイン開発およびフロントチームのリーダーを担当し、API設計やページ設計など上流から下流まで一貫して携わりました。また、一部バックエンドのエンドポイント開発にも参加しました。\n\n主な機能:\n・需要予測に基づく発注提案\n・在庫管理\n・発注管理\n・売上分析\n\n担当範囲:\n・フロントエンド全般（設計・実装・レビュー・テスト）\n・API設計\n・バックエンド一部実装\n\n使用技術:\n・Next.js\n・TypeScript\n・Tailwind CSS\n・FastAPI\n・Python\n・MySQL',
      imageSrc: '/images/docomo.png',
    },
    {
      id: 3,
      title: 'お寿司屋さんのタブレット注文',
      description:
        'インターン先で開発した、お寿司屋さんの店員が使用するタブレット注文アプリ。時価の商品を柔軟に管理できるようカスタマイズ性を重視し、UI/UXにも強くこだわりました。レシートプリンタとの連携や、日々の売上集計のためにGAS APIを利用して自動でスプレッドシートにデータを送信する仕組みも構築。データベースにはFirebaseを採用し、デプロイまで担当しました。設計から実装・運用までほぼ全ての工程を担当しています。\n\n主な機能:\n・タブレットからの注文管理\n・時価商品の柔軟な登録・編集\n・レシートプリンタ連携\n・売上データの自動集計・スプレッドシート連携\n\n使用技術:\n・Next.js\n・Firebase\n・Google Apps Script\n・TypeScript',
      imageSrc: '/images/sushi.png',
    },
    {
      id: 4,
      title: 'Break Filter Bubble',
      description:
        'ハッカソンで開発したニュースアプリです。ユーザーに興味のあるニュースジャンルをアンケートし、その結果から普段見ないようなジャンルのニュースを中心に表示します。Google News APIから指定キーワードで複数のニュース記事を取得し、Geminiがそれらを分かりやすくまとめて新しい記事として提供します。\n\n担当範囲:\n・設計全般\n・フロントエンド開発\n\n使用技術:\n・Next.js\n・TypeScript\n・Firebase',
      imageSrc: '/images/bubble.jpeg',
    },
    {
      id: 5,
      title: '金融市場の暴落の検知システム',
      description:
        '研究で市場の暴落検知システムを開発しました。収益率分布の安定分布の特性指数αに着目し、αと暴落の関係性を発見。αに対してクラスタリングを行うことで異常値を検出しています。この計算を毎日市場が終了するタイミングで自動でデータ取得・計算し、Slackに通知するまでを自動化しました。\n\n使用技術:\n・Python\n・GitHub Actions\n・Slack API',
      imageSrc: '/images/money.png',
    },
  ];

  const openModal = (index: number) => {
    setSelectedWork(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='section work'>
      <h2 className='mb-6 text-3xl font-bold'>Works</h2>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {works.map((work, index) => (
          <WorkItem
            key={work.id}
            title={work.title}
            description={work.description}
            imageSrc={work.imageSrc}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedWork !== null && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={works[selectedWork].title}
          description={works[selectedWork].description}
          imageSrc={works[selectedWork].imageSrc}
        />
      )}
    </div>
  );
}
