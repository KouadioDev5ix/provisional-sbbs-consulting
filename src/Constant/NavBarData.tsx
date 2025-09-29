import {
  Award,
  Gift,
  Home,
  Info,
  Lightbulb,
  Mail,
  Newspaper,
  Users,
} from "lucide-react";
import type { INavBarLinks } from "../Models/Interfaces/navBarLinks";

export const navBarElement: INavBarLinks[] = [
  {
    id: 1,
    label: "Acceuil",
    linkTo: "/",
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: 2,
    label: "Nos offres",
    linkTo: "/nos-offres",
    icon: <Gift className="w-5 h-5" />,
  },
  //Todo / add Home page
  {
    id: 3,
    label: "Méthodologies",
    linkTo: "/methodologies",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    id: 4,
    label: "Certifications",
    linkTo: "/certifications",
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 5,
    label: "Communauté",
    linkTo: "/communaute",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 6,
    label: "Contact",
    linkTo: "/contact",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    id: 7,
    label: "A propos",
    linkTo: "/a-propos-de-nous",
    icon: <Info className="w-5 h-5" />,
  },
  {
    id: 8,
    label: "Blog",
    linkTo: "/blog",
    icon: <Newspaper className="w-5 h-5" />,
  },
];
