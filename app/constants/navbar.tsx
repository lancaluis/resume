import { Map, Tent } from "lucide-react";

export const NAVBAR_LINKS = [
  {
    name: "Home",
    route: "/",
    icon: <Tent className="w-6 h-6" />,
  },
  {
    name: "Trips",
    route: "/trips",
    icon: <Map className="w-6 h-6" />,
  },
];
