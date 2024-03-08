import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/products")
  const { products } = await response.json()

  const blogResponse = await fetch("/api/blogs")
  const { blogs } = await blogResponse.json()

  const title = `Products`
  return { title, products, blogs }
}) satisfies PageServerLoad

export const prerender = true
