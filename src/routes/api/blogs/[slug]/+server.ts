import type { RequestHandler } from "./$types"
import { dbBlogs as blogs } from "$lib/db/dbBlogs"
import { json } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ params: { slug } }) => {
  const blog = blogs.find((el) => el.id === Number(slug))
  return json({ blog }, { status: 200 })
}
