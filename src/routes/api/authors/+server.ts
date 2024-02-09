import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { authors } from "$lib/db/dbAuthor"

export const GET: RequestHandler = async () => {
  return json({ authors }, { status: 200 })
}
