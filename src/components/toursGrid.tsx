"use client";

import { toursQuery } from "@/reactQuery/toursQuery";
import { useQuery } from "@tanstack/react-query";
import { TourCard } from "./tourCard";
import { skeletonCards } from "./skeletonSlider";

export function ToursGrid() {
  const { data: tours, isLoading, isError } = useQuery(toursQuery);

  return (
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-[1200px] my-14">
      {isLoading && skeletonCards}

      {isError && <p>Something went wrong</p>}

      {!isLoading &&
        !isError &&
        tours &&
        tours.map((tour) => <TourCard tour={tour} key={tour.tourUniqueId} />)}
    </div>
  );
}
