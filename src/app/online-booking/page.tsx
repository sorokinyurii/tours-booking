// import mockTours from "@/mockData/tours.json";

import { DatePickerWithRange } from "@/components/datePicker";
import { AmountPeoplePicker } from "@/components/amountPeoplePicker";

export default function OnlineBooking() {
  return (
    <div className="px-[100px] mx-auto max-w-[1200px] my-14">
      <div className="w-[100%] h-[100px] shadow-lg border border-gray-100 rounded-md flex ">
        <div className="p-3">
          <p className="text-gray-500 mb-2">Check-in - Checkout</p>
          <DatePickerWithRange className="h-[100%]" />
        </div>

        <div className="p-3 border-l-[1px] ">
          <p className="text-gray-500 mb-2">Guests:</p>

          <AmountPeoplePicker />
        </div>

        <button className="p-3 bg-green-400 rounded-md text-white">
          Search
        </button>
      </div>
    </div>
  );
}
