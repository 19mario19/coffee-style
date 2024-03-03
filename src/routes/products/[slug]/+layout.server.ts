import type { LayoutServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/products")
  const { featuredProducts } = await response.json()

  console.log(featuredProducts)

  return { featuredProducts }
}) satisfies LayoutServerLoad
