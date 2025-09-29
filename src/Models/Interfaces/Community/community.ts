export interface ICommunityBenefics {
  id: number;
  label: string;
  description: string;
  img: string;
}

export type EventType =
  | "Tous"
  | "Networking"
  | "Formation"
  | "Masterclass"
  | "Mission";

export interface ICommunityEventCard {
  id: number;
  type: EventType;
  title: string;
  location: string;
  time: string;
  description: string;
  date: string;
}

export interface IcommunityTeam {
  id: number;
  enterpriseName: string;
  shortDescription: string;
  image: string;
}
