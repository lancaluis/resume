import DynamicMap from "@/components/Map/DynamicImport";
import { MapProps } from "@/components/Map";

const PlaceTemplate = ({ places }: MapProps) => {
  return (
    <>
      <DynamicMap places={places} />
    </>
  );
};

export default PlaceTemplate;
