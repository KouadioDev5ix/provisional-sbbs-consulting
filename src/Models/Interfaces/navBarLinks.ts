import type { JSX } from "@emotion/react/jsx-runtime";

export interface INavBarLinks {
  id: number;
  label: string;
  linkTo: string;
  icon: JSX.Element;
}
