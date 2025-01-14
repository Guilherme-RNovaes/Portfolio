
"use client"
import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed z-10 bg-white hover:bg-foreground bottom-4 right-4 md:bottom-10 rounded-full shadow-xl md:right-10 p-3 transition-all ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={scrollToTop}
    >
      <ChevronUp className='w-6 h-6 text-background' />
    </button>
  );
};

export default ScrollToTopButton;
