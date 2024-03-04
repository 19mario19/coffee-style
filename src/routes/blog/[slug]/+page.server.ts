import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch, params: { slug } }) => {
  const response = await fetch(`/api/blogs/${slug}`)
  const { blog } = await response.json()

  return { blog }
}) satisfies PageServerLoad
