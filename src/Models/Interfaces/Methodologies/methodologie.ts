export interface ISteps {
  number: number;
  title: string;
  period: string;
  description: string;
}

export interface ISuccessStories {
  company: string;
  sector: string;
  metrics: {
    revenue: { value: string; label: string };
    costs: { value: string; label: string };
  };
  productivity: { value: string; label: string };
  satisfaction: { value: string; label: string };
  rating: string;
  ratingColor: string;
  testimonial: string;
}
