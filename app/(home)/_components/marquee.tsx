import React from "react";
import MarqueeItem from "./marquee-item";
import { Badge } from "@/app/_components/ui/badge";
import { backEnd, dataBase, devEnviroment, frontEnd } from "@/config/skills";

type Skill = {
  icon: React.ElementType;
  skill: string;
};

const Marquee = () => {

  const renderSkills = (skills: Skill[]) => (
    <>
      {skills.map((props, index) => (
        <div key={index} className="m-2">
          <Badge variant='secondary' className="flex flex-row items-center justify-start w-32 md:w-40 h-12 md:h-14 gap-2 px-2 md:px-4 py-2 rounded-xl">
            <props.icon size={22} />
            <p className="text-sm font-medium md:font-semibold">{props.skill}</p>
          </Badge>
        </div>
      ))}
    </>
  )

  return (
    <div className="container mx-auto overflow-hidden">
      <MarqueeItem items={renderSkills(frontEnd)} from={0} to={"-100%"} />
      <MarqueeItem items={renderSkills(backEnd)} from={"-100%"} to={0} />
      <MarqueeItem items={renderSkills(dataBase)} from={0} to={"-100%"} />
      <MarqueeItem items={renderSkills(devEnviroment)} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
