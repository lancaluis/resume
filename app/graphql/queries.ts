export const GET_PLACES = `
  query GetPlaces {
  places {
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
`
export const GET_PLACE_BY_SLUG = `
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
`
