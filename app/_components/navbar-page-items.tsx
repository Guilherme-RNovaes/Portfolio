'use client'

import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import { idNavigationProps } from '@/config/navigation';


const navigationItem = idNavigationProps;

type NavbarProps = {
  isActiveRoute: (route: string) => boolean;
};

const NavbarPageItems = ({ isActiveRoute }: NavbarProps) => {

  // Tipo para a propriedade 'variant' do botão
  type ButtonVariant = 'default' | 'ghost';

  return (
    <>
      <div className='flex flex-row gap-2'>
        {navigationItem.map((props, index) => (
          <Button
            key={index}
            variant={isActiveRoute(props.href) ? 'default' : 'ghost' as ButtonVariant}
            asChild
            className="w-full rounded-full flex flex-row center justify-start group"
          >
            <Link href={props.href} className='flex items-center justify-start'>
              {props.name}
            </Link>
          </Button>
        ))}
      </div>
    </>
  );
};

export default NavbarPageItems;
