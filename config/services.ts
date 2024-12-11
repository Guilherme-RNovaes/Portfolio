import { Building2, ChartNetwork, DollarSign, Eye, House, LucideIcon, ShoppingBag, Workflow } from "lucide-react";

export interface service {
  name: string;
  icon: LucideIcon;
  side: string;
}

export const services: service[] = [
  {
    name: "Criação de landing page",
    icon: House,
    side: "left"
  },
  {
    name: "Criação de site institucional",
    icon: Building2,
    side: "right"
  },
  {
    name: "Criação de página de captura",
    icon: Eye,
    side: "left"
  },
  {
    name: "Criação de página de vendas",
    icon: DollarSign,
    side: "right"
  },
  {
    name: "Criação de E-commerce",
    icon: ShoppingBag,
    side: "left"
  },
  {
    name: "Otimização de SEO",
    icon: ChartNetwork,
    side: "right"
  },
  {
    name: "Conexão/Consumo de REST API's",
    icon: Workflow,
    side: "left"
  },
]
