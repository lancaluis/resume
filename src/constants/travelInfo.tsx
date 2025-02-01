import { Globe2, Map, PlaneTakeoffIcon } from "lucide-react";
import { LiaSimCardSolid } from "react-icons/lia";
import { TbFlipFlops } from "react-icons/tb";

export const TRAVEL_INFO = [
  {
    number: "6",
    title: "Years traveling",
    icon: <Map className="h-8 w-8 text-gray-300" />,
  },
  {
    number: "17",
    title: "Visited countries",
    icon: <Globe2 className="h-8 w-8 text-gray-300" />,
  },
  {
    number: "43",
    title: "Flights",
    icon: <PlaneTakeoffIcon className="h-8 w-8 text-gray-300" />,
  },
  {
    number: "18",
    title: "SIM Cards",
    icon: <LiaSimCardSolid className="h-8 w-8 text-gray-300" />,
  },
  {
    number: "7",
    title: "Broken Havaianas",
    icon: <TbFlipFlops className="h-8 w-8 text-gray-300" />,
  },
];
