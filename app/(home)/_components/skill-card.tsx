import { LucideIcon } from "lucide-react";

interface skillCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}
const SkillCard = ({ icon: Icon, title, text }: skillCardProps) => {
  return (
    <div className="flex flex-col max-w-[350px] h-[450px] justify-start px-8 py-16 gap-6 border border-zinc-800 rounded-xl">
      <Icon className="w-16 h-16" />
      <h1 className="text-4xl font-light">{title}</h1>
      <p className="text-xl font-light text-zinc-500">{text}</p>
    </div>
  )
}

export default SkillCard;
