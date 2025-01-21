"use client"

import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

type Props = {
  direction: string;
  name: string;
  img: string;
  description: string;
  link: string;
  year: number;
  services: string[];
}

const PortfolioCard = ({ direction, name, img, description, year, services, link }: Props) => {
  const isRightDirection = direction === 'right'

  return (
    <div
      className={`flex flex-col ${isRightDirection ? 'lg:flex-row-reverse -translate-x-[10%]' : 'lg:flex-row translate-x-[10%]'} portfolio-card w-full items-center justify-between mb-12 gap-x-6`}
    >
      <Link
        href={link} target="_blank" rel="noreferrer noopener"
        className={`relative w-[300px] h-[300px] md:w-[600px] md:h-[450px] mb-8 md:mb-0 rounded-xl hover-projects overflow-hidden group`}
      >
        <Image src={img} fill alt="project image" className="rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
      </Link>
      <div className={`flex flex-col items-center gap-6 ${isRightDirection ? 'md:items-start' : 'md:items-end md:text-right'}`}>
        <p className="text-xl md:text-2xl text-sub font-light max-w-xs md:max-w-xl truncate text-wrap text-center">{description}</p>
        <h1 className="text-4xl md:text-7xl uppercase">{name}</h1>
        <div className={`flex items-center w-full max-w-[500px] justify-center ${isRightDirection ? 'md:justify-start' : 'md:justify-end'} gap-2 flex-wrap`}>
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
    </div >
  )
}

export default PortfolioCard;
