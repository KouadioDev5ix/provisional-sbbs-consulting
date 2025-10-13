export interface IContact {
  fullName: string;
  compagnieName: string;
  phone: string;
  sectorOfactivity: string;
  typeOfRequestd?: string;
  message: string;
}

export interface API_Response {
  data: IContact[];
  totalEvents: number;
  totalPages: number;
}
