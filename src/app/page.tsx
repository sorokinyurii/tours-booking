"use client";

import { CategorySlider } from "@/components/categorySlider";
import { HomeSlider } from "@/components/homeSlider";
import { SkeletonSlider } from "@/components/skeletonSlider";

import { toursQuery } from "@/reactQuery/toursQuery";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: tours, isLoading, isError } = useQuery(toursQuery);

  return (
    <>
      <HomeSlider />
      <div className="px-[100px] mx-auto max-w-[1200px] my-14">
        {isLoading && (
          <>
            <SkeletonSlider name="Recommended" />
            <SkeletonSlider name="Popular places" />
            <SkeletonSlider name="New" />
          </>
        )}

        {isError && <p>Something went wrong</p>}

        {!isLoading && !isError && tours && (
          <>
            <CategorySlider name="Recommended" options={tours} />
            <CategorySlider
              name="Popular places"
              options={[...tours].reverse()}
            />
            <CategorySlider name="New" options={tours} />
          </>
        )}
      </div>
    </>
  );
}
