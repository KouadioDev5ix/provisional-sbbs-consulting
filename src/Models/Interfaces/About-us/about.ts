export interface IAboutUsFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ITeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image?: string;
}

export interface ITimelineItem {
  year: string;
  title: string;
  description: string;
}
