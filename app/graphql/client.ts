import { GET_PLACES, GET_PLACE_BY_SLUG } from './queries'

export async function getPlaces() {
  const response = await fetch(
    'https://us-west-2.cdn.hygraph.com/content/cm6hticj101el08w3m8qy3i2f/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`
      },
      body: JSON.stringify({
        query: GET_PLACES
      })
    }
  )
  const json = await response.json()
  return json.data
}

export async function getPlaceBySlug(slug: string) {
  const response = await fetch(
    'https://us-west-2.cdn.hygraph.com/content/cm6hticj101el08w3m8qy3i2f/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`
      },
      body: JSON.stringify({
        query: GET_PLACE_BY_SLUG,
        variables: {
          slug: slug
        }
      })
    }
  )
  const json = await response.json()
  return json.data.place
}
