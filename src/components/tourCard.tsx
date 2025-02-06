import { Tour } from "@/types/tours";
import Image from "next/image";
import map from "@/assets/icons/address.svg";
import capacityIcon from "@/assets/icons/capacity.svg";
import wallet from "@/assets/icons/wallet.svg";
import Link from "next/link";

interface Props {
  tour: Tour;
}

export const TourCard: React.FC<Props> = ({ tour }) => {
  const { photo, name, organization, capacity, price } = tour;

  return (
    <div className="flex flex-col w-[310px] rounded-md shadow-md overflow-hidden mb-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo} alt="photo of room" className="h-[245px]"/>
      <div className="px-5 pb-5">
        <h3 className="font-semibold text-[26px]">{name}</h3>
        <p className="text-[12px] mb-1 text-gray-500">{organization}</p>
        <Link href="#" className="flex gap-2 items-center mb-2">
          <Image src={map} alt="address logo" width={18} />
          <p>Map address</p>
        </Link>

        <div className="flex justify-between items-center mb-2">
          <Image
            src={capacityIcon}
            alt="capacity logo"
            width={30}
          />
          <p>{capacity}</p>
        </div>

        <div className="flex justify-between items-center mb-5">
          <Image
            src={wallet}
            alt="capacity logo"
            width={30}
          />
          <p>{price}</p>
        </div>

        <div className="flex justify-around items-center">
          <button className="btnHover h-12 w-[105px] border border-gray-300 p-4 flex items-center justify-center rounded-md">
            In Details
          </button>

          <button className="btnHover h-12 w-[105px] border border-green-300 bg-green-300 text-white p-4 flex items-center justify-center rounded-md">
            Book
          </button>
        </div>
      </div>
      
    </div>
  );
};
