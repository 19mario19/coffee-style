import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/products")
  const { products } = await response.json()

  const blogResponse = await fetch("/api/blogs")
  const { blogs } = await blogResponse.json()

  console.log(blogs, products)

  return { products, blogs }
}) satisfies PageServerLoad
