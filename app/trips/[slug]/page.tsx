import { getPlaceBySlug } from "@/services/hygraph";
import PlaceTemplate from "@/components/Place";

export default async function Place({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const { place } = await getPlaceBySlug(slug);

  return <PlaceTemplate place={place} />;
}
