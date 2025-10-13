import api from "../../axios.config";
import type { API_Event_Response } from "../../types/even";

/**
 *
 * @param page
 * @param limit
 * @param param
 * @returns
 */

export const API_getEventList = async (
  page: number,
  limit: number,
  param: string = ""
) => {
  return api.get<API_Event_Response>(
    `event/clientGetAllEventWithSearchAndPagination?page=${page}&limit=${limit}&search=${param}`
  );
};
