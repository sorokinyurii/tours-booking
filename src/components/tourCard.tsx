import { Tour } from "@/types/tours";
import Image from "next/image";
import map from "@/assets/icons/address.svg";
import capacityIcon from "@/assets/icons/capacity.svg";
import ageIcon from "@/assets/icons/age.svg";
import duration from "@/assets/icons/duration.svg";
import Link from "next/link";

enum Difficulty {
  Easy = "Easy",
  Normal = "Normal",
  Advanced = "Advanced",
  Hard = "Hard",
}

interface Props {
  tour: Tour;
}

export const TourCard: React.FC<Props> = ({ tour }) => {
  const { images, tourName, tourTopic, tourAttributes } = tour;

  const tourImg = images.find((item) => item.type === "main");
  let bg = "";

  switch (tourAttributes.difficulty) {
    case Difficulty.Advanced:
      bg = "bg-pink-400";
      break;

    case Difficulty.Hard:
      bg = "bg-red-400";
      break;

    case Difficulty.Normal:
      bg = "bg-green-400";
      break;

    case Difficulty.Easy:
      bg = "bg-yellow-400";
      break;

    default:
      bg = "";
      break;
  }

  return (
    <div className="flex flex-col w-[310px] rounded-md shadow-md overflow-hidden mb-2 relative">
      <p
        className={`absolute top-[10px] right-[10px] ${bg} px-2 py-[2px] font-semibold text-white bg-opacity-65 rounded-full`}
      >
        {tourAttributes.difficulty}
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={(tourImg && tourImg.url) || ""}
        alt="photo of room"
        className="h-[245px] object-cover"
      />
      <div className="px-5 pb-5">
        <h3 className="font-semibold text-[22px] h-[66px] line-clamp-2">{tourName}</h3>
        <p className="text-[12px] mb-1 text-gray-500">{tourTopic}</p>
        <Link href="#" className="flex gap-2 items-center mb-2">
          <Image src={map} alt="address logo" width={18} />
          <p>Map address</p>
        </Link>

        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-3 items-center">
            <Image src={capacityIcon} alt="capacity logo" width={30} />
            <p>Группа: </p>
          </div>

          <p>{tourAttributes.groupSize}</p>
        </div>

        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-3 items-center">
            <Image src={ageIcon} alt="capacity logo" width={30} />
            <p>Возраст: </p>
          </div>

          <p>{tourAttributes.age}</p>
        </div>

        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-3 items-center">
            <Image src={duration} alt="capacity logo" width={30} className="p-[2px]"/>
            <p>Длительность: </p>
          </div>

          <p>{tourAttributes.duration}</p>
        </div>

        <div className="flex justify-around items-center">
          <button className="btnHover h-12 w-[105px] border border-gray-300 p-4 flex items-center justify-center rounded-md">
            In Details
          </button>

          <button className="btnHover h-12 w-[105px] border border-green-400 bg-green-400 text-white p-4 flex items-center justify-center rounded-md">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};
