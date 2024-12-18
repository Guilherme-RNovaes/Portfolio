import { LucideIcon } from "lucide-react";

interface skillCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}
const SkillCard = ({ icon: Icon, title, text }: skillCardProps) => {
  return (
    <div>
      <Icon />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

export default SkillCard;
