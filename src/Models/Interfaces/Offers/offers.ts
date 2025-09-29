import type { JSX } from "@emotion/react/jsx-runtime";

export interface IModules {
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
}

export interface IOfffersFeatures {
  name: string;
  starter: boolean;
  packComplet: boolean;
  premium: boolean;
}
