import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { dbBlogs as blogs } from "$lib/db/dbBlogs"

const featuredBlogs = blogs.filter((blog) => blog.featured)

const notFeaturedBlogs = blogs.filter((blog) => !blog.featured)

export const GET: RequestHandler = async () => {
  return json({ blogs, featuredBlogs, notFeaturedBlogs }, { status: 200 })
}
