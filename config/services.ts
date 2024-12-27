import { Building2, ChartNetwork, DollarSign, Eye, House, LucideIcon, ShoppingBag, Workflow } from "lucide-react";

export interface service {
  name: string;
  icon: LucideIcon;
  side: string;
}

export const services: service[] = [
  {
    name: "Landing Page",
    icon: House,
    side: "left"
  },
  {
    name: "Site Institucional",
    icon: Building2,
    side: "right"
  },
  {
    name: "Página de Captura",
    icon: Eye,
    side: "left"
  },
  {
    name: "Página de Vendas",
    icon: DollarSign,
    side: "right"
  },
  {
    name: "E-commerce",
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
