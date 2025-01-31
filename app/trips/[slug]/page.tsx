import { notFound } from "next/navigation";
import { getPlaceBySlug, getPlaces } from "@/graphql/client";
import PlaceComponent from "@/components/Place";


export async function generateStaticParams() {
  try {
    const result = await getPlaces();

    if (!result || !result.places || !Array.isArray(result.places)) {
      console.error("Resposta da API inválida:", result);
      return [];
    }

    return result.places.map((page: { slug: string }) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error("Erro ao obter páginas:", error);
    return [];
  }
}

// Buscar dados do lugar
async function getPlaceData(slug: string) {
  try {
    const result = await getPlaceBySlug(slug);

    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    console.error("Erro ao obter dados da página:", error);
    return null;
  }
}

export default async function Place({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const place = await getPlaceData(slug);

  if (!place) {
    notFound();
  }

  return <PlaceComponent place={place} />;
}