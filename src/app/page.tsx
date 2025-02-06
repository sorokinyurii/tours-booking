import { CategorySlider } from "@/components/categorySlider";
import { HomeSlider } from "@/components/homeSlider";

import mockTours from "@/mockData/tours.json";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <div className="px-[100px] mx-auto max-w-[1200px] my-14">
        <CategorySlider name="Recommended" options={mockTours} />
        <CategorySlider name="Popular places" options={mockTours.slice(4)} />
        <CategorySlider name="New" options={[...mockTours].reverse()} />
      </div>
    </>
  );
}
