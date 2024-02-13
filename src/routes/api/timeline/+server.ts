import type { RequestHandler } from "./$types"
import { timeline } from "$lib/db/dbTimeline"
import { json } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  return json(timeline, { status: 200 })
}
