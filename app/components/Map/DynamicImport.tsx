"use client";

import dynamic from "next/dynamic";
import { Places } from "@/types";

const Map = dynamic(
  () => import("@/components/Map").then((component) => component.Map),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    ),
  }
);

const DynamicMap = ({ places }: Places) => {
  return <Map places={places} />;
};

export default DynamicMap;
