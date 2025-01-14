
"use client"
import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

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
    <Button
      className={`fixed z-10 bottom-4 right-4 md:bottom-10 rounded-full shadow-xl md:left-10 p-4 py-6 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      variant='default'
      onClick={scrollToTop}
    >
      <ChevronUp size={18} />
    </Button>
  );
};

export default ScrollToTopButton;
