interface TopSectionProps {
  isLoaded: boolean;
}

export default function TopSection({ isLoaded }: TopSectionProps) {
  return (
    <div
      id='top'
      className={`relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[url('/images/starBack.webp')] bg-cover bg-fixed bg-center text-white ${isLoaded ? 'fadeIn' : 'opacity-0'}`}
    >
      <div className='scroll-down-indicator'>
        <span>Scroll Down</span>
        <div className='arrow'></div>
      </div>
      <h1 className='mb-4 text-4xl font-bold'>Shunsuke&apos;s Portfolio</h1>
      <p className='text-xl'>Welcome to my site</p>
    </div>
  );
}
