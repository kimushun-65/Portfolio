import { useState, useEffect } from 'react';
import Image from 'next/image';

// Modal component
const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  imageSrc 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  description: string; 
  imageSrc: string;
}) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div 
        className="relative bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-gray-800 bg-opacity-70 rounded-full p-2"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Modal content */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-200 whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Work item component
const WorkItem = ({ 
  title, 
  description, 
  imageSrc, 
  onClick 
}: { 
  title: string; 
  description: string; 
  imageSrc: string; 
  onClick: () => void;
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <button 
          className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 flex items-center"
          onClick={onClick}
        >
          <span>詳細を見る</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function WorkSection() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample work data - replace with your actual projects
  const works = [
    {
      id: 1,
      title: "ポートフォリオサイト",
      description: "Next.js、TypeScript、Tailwind CSSを使用して作成した自己紹介用のポートフォリオサイト。レスポンシブデザインを採用し、様々なデバイスで最適な表示を実現。アニメーションやインタラクティブな要素を取り入れ、ユーザー体験を向上させています。\n\n主な機能:\n・レスポンシブデザイン\n・ダークモード対応\n・スムーズスクロール\n・アニメーション効果\n\n使用技術:\n・Next.js\n・TypeScript\n・Tailwind CSS\n・Framer Motion",
      imageSrc: "/images/starBack.webp" // 仮の画像パス、実際のプロジェクト画像に置き換えてください
    },
    {
      id: 2,
      title: "発注システム",
      description: "React、Node.js、MySQLを使用して開発したECサイト向け在庫管理システム。商品の在庫状況をリアルタイムで把握し、発注のタイミングを自動で提案する機能を実装。売上データの分析機能も備えており、経営判断をサポートします。\n\n主な機能:\n・在庫管理\n・発注管理\n・売上分析\n・ユーザー管理\n\n使用技術:\n・React\n・Node.js\n・Express\n・MySQL\n・Chart.js",
      imageSrc: "/images/starBack.webp" // 仮の画像パス
    },
    {
      id: 3,
      title: "お寿司屋さんのタブレット注文アプリ",
      description: "React NativeとOpenWeather APIを使用して開発したモバイルアプリ。ユーザーの現在地に基づいた天気予報を表示し、週間予報や気象警報の通知機能も実装。シンプルなUIで使いやすさを重視しました。\n\n主な機能:\n・現在の天気表示\n・週間予報\n・気象警報通知\n・位置情報連携\n\n使用技術:\n・React Native\n・Expo\n・OpenWeather API\n・Geolocation API",
      imageSrc: "/images/starBack.webp" // 仮の画像パス
    },
    {
      id: 4,
      title: "Break Filter Bubble",
      description: "Vue.jsとFirebaseを使用して開発したタスク管理ツール。ドラッグ＆ドロップでタスクの優先順位を変更できる機能や、期限が近づくとリマインダーを送信する機能を実装。チームでの共同作業をスムーズにするための共有機能も備えています。\n\n主な機能:\n・タスク作成・編集・削除\n・ドラッグ＆ドロップでの並べ替え\n・期限リマインダー\n・チーム共有機能\n\n使用技術:\n・Vue.js\n・Vuex\n・Firebase\n・Firestore\n・Firebase Authentication",
      imageSrc: "/images/starBack.webp" // 仮の画像パス
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
      <h2 className='text-3xl font-bold mb-6'>Works</h2>
      <p className='mb-8'>過去の自分の制作物</p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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

      {/* Modal */}
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
