import { queryOptions } from "@tanstack/react-query";
import { queryKeys } from "./queriesKey";
import { toursService } from "@/services/toursServices";


export const toursQuery = queryOptions({
  queryKey: [queryKeys.getTours],
  queryFn: async () => {
    try {
      const resp = await toursService.getTours();

      console.log(resp);

      return resp;
    } catch (error) {
      console.log("something went wrong", error);
    }
  },
});
