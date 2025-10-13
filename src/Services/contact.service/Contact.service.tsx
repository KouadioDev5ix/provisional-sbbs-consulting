import api from "../../axios.config";
import type { IContact } from "../../types/contact";

export const API_constactRequest = async (payLoad: IContact) => {
  return api.post<IContact>("conctacts/createContact", payLoad);
};
