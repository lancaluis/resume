import { getPlaceBySlug } from "@/services/hygraph";
import PlaceComponent from "@/components/Place";

export default async function Place({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { place } = await getPlaceBySlug(slug);

  if (!place) {
    return <div>Place not found</div>;
  }

  return <PlaceComponent place={place} />;
}
