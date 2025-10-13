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
    label: "navbar.home",
    linkTo: "/",
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: 2,
    label: "navbar.offers",
    linkTo: "/nos-offres",
    icon: <Gift className="w-5 h-5" />,
  },

  {
    id: 3,
    label: "navbar.methods",
    linkTo: "/methodologies",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    id: 4,
    label: "navbar.certifications",
    linkTo: "/certifications",
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 5,
    label: "navbar.community",
    linkTo: "/communaute",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 6,
    label: "navbar.contact",
    linkTo: "/contact",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    id: 7,
    label: "navbar.about",
    linkTo: "/a-propos-de-nous",
    icon: <Info className="w-5 h-5" />,
  },
  {
    id: 8,
    label: "navbar.blog",
    linkTo: "/blog",
    icon: <Newspaper className="w-5 h-5" />,
  },
];
