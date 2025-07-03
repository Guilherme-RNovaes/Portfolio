"use client"

import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

type Props = {
  direction: string;
  name: string;
  imgMobile: string;
  imgDesktop: string;
  link: string;
  year: number;
  services: string[];
}

const PortfolioCard = ({ direction, name, imgMobile, imgDesktop, year, services, link }: Props) => {
  const isRightDirection = direction === 'right'

  return (
    <div
      className={`flex flex-col ${isRightDirection ? 'lg:flex-row-reverse -translate-x-[10%]' : 'lg:flex-row translate-x-[10%]'} relative portfolio-card w-full items-center justify-between mb-12 gap-x-6`}
    >
      <Link
        href={link} target="_blank" rel="noreferrer noopener"
        className={`relative w-[90vw] md:w-[95vw] h-[90vh] mb-8 md:mb-0 rounded-xl hover-projects overflow-hidden group`}
      >
        <Image src={imgMobile} fill alt="project image" className="block md:hidden rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
        <Image src={imgDesktop} fill alt="project image" className="hidden md:block rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
        <div className={`absolute bottom-0 bg-black/20 backdrop-blur-xl w-full flex flex-col items-center gap-2 md:gap-6 py-2 md:py-10 ${isRightDirection ? 'md:items-center' : 'md:items-center md:text-center'}`}>
          <h1 className="text-xl md:text-7xl uppercase text-center">{name}</h1>
          <div className={`flex items-center w-full max-w-[500px] justify-center ${isRightDirection ? 'md:justify-center' : 'md:justify-center'} gap-2 flex-wrap`}>
            {
              services.map((services, index) => (
                <Badge variant="outline" key={index}>
                  <p className="font-light text-sub text-sm md:text-lg">{services}</p>
                </Badge>
              ))
            }
            <Badge variant="default">
              <p className="font-light text-sm md:text-lg">{year}</p>
            </Badge>
          </div>
        </div>
      </Link>
    </div >
  )
}

export default PortfolioCard;
