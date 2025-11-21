'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToHash = (hash: string) => {
    window.location.hash = hash;
    setIsMobileMenuOpen(false);
  };

  // モバイルメニューが開いている時はスクロールを無効化
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 md:px-12'>
        {/* ロゴ/名前 */}
        <button
          onClick={() => scrollToSection('top')}
          className='text-xl font-bold text-white transition-colors hover:text-cyan-400'
        >
          Shunsuke Kimura
        </button>

        {/* デスクトップナビゲーション */}
        <nav className='hidden md:flex md:gap-8'>
          <button
            onClick={() => scrollToSection('top')}
            className='text-sm font-light text-white transition-colors hover:text-cyan-400'
          >
            Home
          </button>
          <button
            onClick={() => (window.location.hash = '#about')}
            className='text-sm font-light text-white transition-colors hover:text-cyan-400'
          >
            About
          </button>
          <button
            onClick={() => (window.location.hash = '#work-experience')}
            className='text-sm font-light text-white transition-colors hover:text-cyan-400'
          >
            Experience
          </button>
          <button
            onClick={() => (window.location.hash = '#education')}
            className='text-sm font-light text-white transition-colors hover:text-cyan-400'
          >
            Education
          </button>
          <button
            onClick={() => (window.location.hash = '#works')}
            className='text-sm font-light text-white transition-colors hover:text-cyan-400'
          >
            Works
          </button>
          <button
            onClick={() => (window.location.hash = '#skills')}
            className='text-sm font-light text-white transition-colors hover:text-cyan-400'
          >
            Skills
          </button>
          <button
            onClick={() => (window.location.hash = '#contact')}
            className='text-sm font-light text-white transition-colors hover:text-cyan-400'
          >
            Contact
          </button>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className='text-white md:hidden'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? (
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
          ) : (
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
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`fixed left-0 right-0 top-[72px] bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className='flex flex-col px-6 py-4'>
          <button
            onClick={() => scrollToSection('top')}
            className='border-b border-gray-800 py-4 text-left text-lg font-light text-white transition-colors hover:text-cyan-400'
          >
            Home
          </button>
          <button
            onClick={() => navigateToHash('#about')}
            className='border-b border-gray-800 py-4 text-left text-lg font-light text-white transition-colors hover:text-cyan-400'
          >
            About
          </button>
          <button
            onClick={() => navigateToHash('#work-experience')}
            className='border-b border-gray-800 py-4 text-left text-lg font-light text-white transition-colors hover:text-cyan-400'
          >
            Experience
          </button>
          <button
            onClick={() => navigateToHash('#education')}
            className='border-b border-gray-800 py-4 text-left text-lg font-light text-white transition-colors hover:text-cyan-400'
          >
            Education
          </button>
          <button
            onClick={() => navigateToHash('#works')}
            className='border-b border-gray-800 py-4 text-left text-lg font-light text-white transition-colors hover:text-cyan-400'
          >
            Works
          </button>
          <button
            onClick={() => navigateToHash('#skills')}
            className='border-b border-gray-800 py-4 text-left text-lg font-light text-white transition-colors hover:text-cyan-400'
          >
            Skills
          </button>
          <button
            onClick={() => navigateToHash('#contact')}
            className='py-4 text-left text-lg font-light text-white transition-colors hover:text-cyan-400'
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
