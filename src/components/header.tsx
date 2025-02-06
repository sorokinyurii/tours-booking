"use client";

import Image from "next/image";
import { useState } from "react";

import search from "@/assets/icons/search.svg";
import Link from "next/link";
import { Logo } from "./logo";

export const Header = () => {
  const [query, setQuery] = useState("");

  return (
    <header className="shadow-lg self-start w-[100%]">
      <div className="px-[100px] mx-auto max-w-[1200px] flex items-center justify-between relative z-20 py-5">
        <Logo/>

        <div className="flex gap-4">
          <Link href={'/'} className="menuHover uppercase text-[16px] font-semibold">Home</Link>
          <Link href={'/online-booking'} className="menuHover uppercase text-[16px] font-semibold">Online booking</Link>
          <Link href={'/'} className="menuHover uppercase text-[16px] font-semibold">about us</Link>
        </div>

        <div className="flex items-center relative">
          <div className="relative max-w-[405px] mr-4">
            <Image
              src={search}
              alt="search icon"
              width={20}
              className="absolute top-[10px] left-[20px]"
            />

            <input
              placeholder="Search"
              className=" bg-dark rounded-full w-full py-[9px] pr-[22px] pl-[45px] font-main font-bold text-[14px] border border-gray-200"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
