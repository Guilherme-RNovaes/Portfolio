'use client';

import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import NavigationProps from '@/config/navigation';
import { useEffect, useState } from 'react';

const navigationItem = NavigationProps;

const NavbarItems = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="flex flex-row gap-2">
        {navigationItem.map((props, index) => (
          <Button
            key={index}
            variant={activeSection === props.id ? 'link' : 'link'}
            asChild
            className={`${activeSection === props.id ? 'bg-white/15' : 'hidden md:block'} w-full rounded-full center justify-start group`}
          >
            <Link href={props.href} className="flex items-center justify-start">
              {props.name}
            </Link>
          </Button>
        ))}
      </div>
    </>
  );
};

export default NavbarItems;
