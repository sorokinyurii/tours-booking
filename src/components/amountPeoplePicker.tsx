'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image";
import capacity from "@/assets/icons/capacity.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";

export function AmountPeoplePicker() {
  const [amountOfAdults, setAmountOfAdults] = useState(0)
  const [amountOfKids, setAmountOfKids] = useState(0)

  return (
    <Popover>
      <PopoverTrigger asChild>
      
        <Button variant="outline">
        <Image src={capacity} alt="amount of people" width={20} />
          {`Adults: ${amountOfAdults} - Kids: ${amountOfKids}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-44">
        <div>
          <div className="flex gap-3 mb-4">
            <p className="text-gray-600">Adults:</p>
            <button
              onClick={() => setAmountOfAdults(prev => prev + 1)}
              className="w-6 h-6 flex items-center justify-center border border-green-600 text-green-600 rounded-full"
            >
              +
            </button>
            <p>{amountOfAdults}</p>
            <button
              onClick={() => setAmountOfAdults(prev => prev - 1 < 0 ? 0 : prev - 1)}
              className="w-6 h-6 flex items-center justify-center border border-green-600 text-green-600 rounded-full"
            >
              -
            </button>
          </div>
          <div className="flex gap-3">
            <p className="text-gray-600 mr-[12px]">Kids:</p>
            <button
              onClick={() => setAmountOfKids(prev => prev + 1)}
              className="w-6 h-6 flex items-center justify-center border border-green-600 text-green-600 rounded-full"
            >
              +
            </button>
            <p>{amountOfKids}</p>
            <button
              onClick={() => setAmountOfKids(prev => prev - 1 < 0 ? 0 : prev - 1)}
              className="w-6 h-6 flex items-center justify-center border border-green-600 text-green-600 rounded-full"
            >
              -
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
