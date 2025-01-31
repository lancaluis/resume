import { GraphQLClient } from "graphql-request";

const HYGRAPH_API = process.env.HYGRAPH_API!;
export const hygraph = new GraphQLClient(HYGRAPH_API);

export const getPlaces = async () => {
  const query = `
  query GetPlaces{
    places {
      id
      slug
      title
      location {
        latitude
        longitude
      }
    }
  }
`;

  return await hygraph.request(query);
};

export const getPlaceBySlug = async (slug: string) => {
  const query = `
    query GetPlaceBySlug($slug: String!) {
      place(where: { slug: $slug }) {
        id
        slug
        title
        subtitle
        content {
          html
        }
        location {
          latitude
          longitude
        }
        gallery {
          url
          width
          height
        }
      }
    }
  `;

  const variables = { slug };
  return await hygraph.request(query, variables);
};
