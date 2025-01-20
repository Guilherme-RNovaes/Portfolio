import Link from 'next/link';
import NavigationProps from '@/config/navigation';
import { MouseEventHandler } from 'react';
import { ArrowRightIcon } from 'lucide-react';

interface NavbarMenuItemsProps {
  navItemsRef: any
  toggleMenu: MouseEventHandler;
}

const NavbarMenuItems = ({ navItemsRef, toggleMenu }: NavbarMenuItemsProps) => {
  return (
    <div className="relative flex flex-col md:pl-30 lg:pl-40 text-foreground">
      {NavigationProps.map((props, index) => (
        <div
          ref={(el: null) => (navItemsRef.current[index] = el!)}
          key={index}
          className="flex justify-start items-center w-full"
        >
          <Link
            href={props.href}
            onClick={toggleMenu}
            className="flex items-center uppercase text-5xl md:text-7xl group hover:translate-x-12 transition-all"
          >
            <ArrowRightIcon className="hidden md:block h-16 w-full opacity-0 group-hover:opacity-100 transition-opacity" />
            {props.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavbarMenuItems;
