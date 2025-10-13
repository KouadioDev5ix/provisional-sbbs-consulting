import api from "../../axios.config";
import type { IContact } from "../../types/contact";
import type { IDianostic } from "../../types/dianostic";

export const API_dianosticRequest = async (payLoad: IDianostic) => {
  return api.post<IContact>("dianoctic/createDianostic", payLoad);
};
