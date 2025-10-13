export type ivents = {
  id?: number;
  type: string;
  title: string;
  location: string;
  time: string;
  description: string;
  date: string;
};

export interface API_Event_Response {
  ivents: ivents[];
  totalEvents: number;
  totalPages: number;
}
