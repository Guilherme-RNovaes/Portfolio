'use client';

import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import NavigationProps from '@/config/navigation';

const navigationItem = NavigationProps;

const NavbarItems = () => {
  return (
    <>
      <div className="flex bg-black/30 backdrop-blur-xl shadow-xl shadow-black/20 rounded-xl flex-row gap-2 px-6">
        {navigationItem.map((props, index) => (
          <Button
            key={index}
            variant='link'
            asChild
            className='w-full center decoration-transparent hover:scale-105 transition-all justify-start group'
          >
            <Link href={props.href} className="hidden md:flex items-center justify-start">
              {props.name}
            </Link>
          </Button>
        ))}
      </div>
    </>
  );
};

export default NavbarItems;
