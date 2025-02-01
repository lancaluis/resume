import { Metadata } from "next";

import { getPlaces } from "@/services/hygraph";
import PlaceTemplate from "@/components/Map/MapWrapper";

import { TbFlipFlops } from "react-icons/tb";
import { LiaSimCardSolid } from "react-icons/lia";
import { Globe2, Map, PlaneTakeoffIcon } from "lucide-react";
import { TRAVEL_INFO } from "@/constants/travelInfo";

export const metadata: Metadata = {
  title: "Luís Lança - Travel Journal & Digital Nomad Adventures",
  description:
    "Exploring the world while working remotely. Travel journal, digital nomad lifestyle, and remote work insights.",
};

const Trips = async () => {
  const { places } = await getPlaces();

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col items-center mb-6 justify-center">
        <h1 className="text-2xl font-bold text-gray-200">Trips</h1>
        <p className="text-gray-300">Choose a place and travel with me</p>
      </div>
      <div className="flex flex-col mx-4 rounded-md border-outline border border-base-100">
        <div className="gap-4 items-center justify-around my-4 p-4 xl:flex hidden">
          {TRAVEL_INFO.map((info, index) => (
            <div key={index} className="flex gap-4 items-center">
              {info.icon}
              <div>
                <p className="text-gray-300 text-4xl font-bold">{info.number}</p>
                <p className="text-gray-300 text-xl">{info.title}</p>
              </div>
            </div>
          ))}
        </div>
        <PlaceTemplate places={places} />
      </div>
    </div>
  );
};

export default Trips;
export const revalidate = 60;
