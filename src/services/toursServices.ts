import { useHttp } from "@/api/http";
import { Tour } from "@/types/tours";

export const getTours = async (): Promise<Tour[]> => {
  const resp = await useHttp.get<void, Tour[]>('/tours');
  console.log('resp', resp);
  return resp;
}

export const toursService = { getTours };