import type { LayoutServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/blogs")
  const { featuredBlogs } = await response.json()

  return { featuredBlogs }
}) satisfies LayoutServerLoad
