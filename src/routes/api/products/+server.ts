import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { db as products } from "$lib/db/db"

const featuredProducts = products.filter((product) => product.featured)

const notFeaturedProducts = products.filter((product) => !product.featured)

export const GET: RequestHandler = async () => {
  return json(
    { products, featuredProducts, notFeaturedProducts },
    { status: 200 },
  )
}
