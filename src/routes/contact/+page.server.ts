import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/addresses")
  const addresses  = await response.json()

  return { addresses }
}) satisfies PageServerLoad
