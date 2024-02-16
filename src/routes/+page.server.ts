import type { PageServerLoad } from "./$types"
import type { CardDetailed } from "$lib/types/types"
import img from "$lib/img/Home/Section1/bg.jpg"

const section1: CardDetailed = {
  id: 0,
  img,
  subtitle: "BEST PLACE TO BUY DESIGN",
  title: "Coffee Mugs",
  description:
    "The most versatile furniture system ever created. Designed to fit your life, made to move and grow.",
  buttonName: "EXPLORE OUR PRODUCTS",
}
const section2: CardDetailed = {
  id: 1,
  title: "Even the all-powerful Pointing has no control about the blind texts.",
  description:
    "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  buttonName: "Read the full Story",
}

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/products")
  const { featuredProducts, notFeaturedProducts } = await response.json()

  const response2 = await fetch("/api/blogs")
  const { featuredBlogs, notFeaturedBlogs } = await response2.json()

  return {
    section1,
    section2,
    featuredProducts,
    notFeaturedProducts,
    featuredBlogs,
    notFeaturedBlogs,

  }
}) satisfies PageServerLoad
