import PlaceTemplate from "@/components/Map/MapWrapper";
import { getPlaces } from "@/services/hygraph";

const Trips = async () => {
  const { places } = await getPlaces();

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col items-center mb-4 justify-center">
        <h1 className="text-2xl font-bold text-gray-200">Trips</h1>
        <p className="text-gray-300">Choose a place and travel with me</p>
      </div>
      <div className="border border-base-100 p-4 2px rounded-md">
        <PlaceTemplate places={places} />
      </div>
    </div>
  );
};

export default Trips;
export const revalidate = 60;