import logo from "@/assets/icons/test-logo.svg";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src={logo} alt="tours booking logo" width={55} className="" />
      <p className="text-[20px] font-bold">
        Tours <br /> Booking
      </p>
    </div>
  );
};
