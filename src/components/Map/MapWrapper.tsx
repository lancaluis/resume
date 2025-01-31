import { Places } from "../../types";
import DynamicMap from "./DynamicImport";

const PlaceTemplate = ({ places }: Places) => {
  return <DynamicMap places={places} />;
};

export default PlaceTemplate;
