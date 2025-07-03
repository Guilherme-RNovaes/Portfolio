'use client';

import NavigationProps from '@/config/navigation';
import AnimatedLink from './animated-link';

const navigationItem = NavigationProps;

const NavbarItems = () => {
  return (
    <>
      <div className="hidden md:flex bg-black/30 backdrop-blur-xl shadow-xl shadow-black/20 rounded-sm flex-row gap-10 px-10 py-2">
        {navigationItem.map((props, index) => (
          <AnimatedLink key={index} href={props.href} className='text-white font-medium text-sm'>
            {props.name}
          </AnimatedLink>
        ))}
      </div>
    </>
  );
};

export default NavbarItems;
