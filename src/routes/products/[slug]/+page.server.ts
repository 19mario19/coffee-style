import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch, params: { slug } }) => {
  const response = await fetch(`/api/products/${slug}`)
  const { product } = await response.json()

  const title = `Product - ${slug}`
  return { title, product }
}) satisfies PageServerLoad
