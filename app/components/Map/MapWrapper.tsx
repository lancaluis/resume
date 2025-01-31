import { Places } from "@/types";
import DynamicMap from "@/components/Map/DynamicImport";

const PlaceTemplate = ({ places }: Places) => {
  return <DynamicMap places={places} />;
};

export default PlaceTemplate;
