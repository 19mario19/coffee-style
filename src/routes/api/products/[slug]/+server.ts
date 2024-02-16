import type { RequestHandler } from "./$types"
import { db as products } from "$lib/db/db"
import { json } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ params: { slug } }) => {
  const product = products.find((el) => el.id === Number(slug))
  return json({ product }, { status: 200 })
}
