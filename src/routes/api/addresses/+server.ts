import type { RequestHandler } from "./$types"
import { addresses } from "$lib/db/dbAddresses"
import { json } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  return json(addresses, { status: 200 })
}
