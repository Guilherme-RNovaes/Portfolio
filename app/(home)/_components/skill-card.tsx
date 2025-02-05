"use client";

import { ArrowRightCircle, LifeBuoy, LucideIcon, MonitorSmartphone } from "lucide-react";

interface skillCardProps {
  icon: LucideIcon;
  cardNum: string;
  title: string;
  text: string;
  liOne: string;
  liTwo: string;
  liThree: string;
}

const SkillCard = ({ icon: Icon, cardNum, title, text, liOne, liTwo, liThree }: skillCardProps) => {
  return (
    <div className="skill-card bg-background flex flex-col w-full border-t border-sub items-center justify-start md:px-8 pt-2 pb-36 xl:pb-56">
      <div className="flex flex-row w-full items-start py-2 justify-between">
        <p className="text-xl w-[20%] md:w-[50%] md:text-4xl xl:text-6xl font-semibold">({cardNum})</p>
        <div className="flex flex-col w-full gap-16">
          <div className="flex flex-row w-full justify-between items-center">
            <h1 className="text-md w-full md:text-4xl xl:text-6xl font-semibold md:font-light">{title}</h1>
            <Icon className="w-8 md:w-16 h-8 md:h-16 text-sub" />
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-xl md:text-2xl max-w-xl font-light text-sub">{text}</p>
            <ul>
              <li className="border-b border-sub py-2 flex flex-row gap-6 text-xl md:text-3xl">
                <span className="w-12 text-lg text-sub">01</span>
                <p>{liOne}</p>
              </li>
              <li className="border-b border-sub py-2 flex flex-row gap-6 text-xl md:text-3xl">
                <span className="w-12 text-lg text-sub">02</span>
                {liTwo}
              </li>
              <li className="border-b border-sub py-2 flex flex-row gap-6 text-xl md:text-3xl">
                <span className="w-12 text-lg text-sub">03</span>
                {liThree}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCardsContainer = () => {
  return (
    <div
      className="flex flex-col items-center w-full justify-between relative"
    >
      <div className="sticky top-0 w-full h-full mb-[10em] md:mb-[12em]" style={{ top: "calc(20vh + 0em)" }}>
        <SkillCard
          icon={ArrowRightCircle}
          cardNum="01"
          title="Landing Pages que convertem"
          text="Precisa atrair clientes? Crio páginas de alta performance, otimizadas para SEO e com design voltado para conversões."
          liOne="Conquiste Mais Clientes com Sites Otimizados"
          liTwo="Páginas de Alta Performance para Seu Negócio"
          liThree="Design Focado em Conversões e SEO"
        />
      </div>
      <div className="sticky top-0 w-full h-full mb-[5em] md:mb-[7em]" style={{ top: "calc(20vh + 5em)" }}>
        <SkillCard
          icon={MonitorSmartphone}
          cardNum="02"
          title="Design responsivo"
          text="Sites incríveis, que funcionam perfeitamente em qualquer dispositivo. Proporciono uma experiência fluida tanto para desktop quanto para mobile."
          liOne="Experiência Perfeita em Qualquer Dispositivo"
          liTwo="Sites Responsivos para Desktop e Mobile"
          liThree="Design Funcional e Impressionante"
        />
      </div>
      <div className="sticky top-0 w-full h-full mb-[0em] md:mb-[2em]" style={{ top: "calc(20vh + 0em)" }}>
        <SkillCard
          icon={LifeBuoy}
          cardNum="03"
          title="Suporte técnico e manutenção"
          text="Não basta ter um site incrível, ele precisa estar sempre atualizado. Ofereço suporte contínuo para garantir que sua plataforma esteja sempre no topo."
          liOne="Seu Site Sempre Atualizado e no Topo"
          liTwo="Manutenção Contínua para Sua Plataforma"
          liThree="Suporte Essencial para Crescer Online"
        />
      </div>
    </div>
  );
};

export default SkillCardsContainer;
