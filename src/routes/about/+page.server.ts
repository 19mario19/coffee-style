import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/about")
  const { aboutCards } = await response.json()

  const responseAuthors = await fetch("/api/authors")
  const { authors } = await responseAuthors.json()

  return { aboutCards, authors }
}) satisfies PageServerLoad
