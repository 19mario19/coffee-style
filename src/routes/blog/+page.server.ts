import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/blogs")
  const { blogs, featuredBlogs } = await response.json()

  const response1 = await fetch("/api/authors")
  const authors = await response1.json()

  return { blogs, featuredBlogs, authors }
}) satisfies PageServerLoad
