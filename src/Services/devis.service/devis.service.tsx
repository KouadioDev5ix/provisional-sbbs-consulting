import api from "../../axios.config";
import type { IDevis } from "../../types/devis";

export const API_devisRequest = async (payLoad: IDevis) => {
  return api.post<IDevis>("devis/createDevis", payLoad);
};
