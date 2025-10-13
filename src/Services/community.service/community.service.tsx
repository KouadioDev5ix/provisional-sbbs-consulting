import api from "../../axios.config";
import type { IEventSubscriber } from "../../types/eventSubscriber";

export const API_subscriberRequest = async (payLoad: IEventSubscriber) => {
  return api.post<IEventSubscriber>("eventSubscribers/registration", payLoad);
};
