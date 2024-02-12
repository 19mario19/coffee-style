import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import type { CardDetailed } from "$lib/types/types"
import one from "$lib/img/About/1.jpg"
import two from "$lib/img/About/2.jpg"

const aboutCards: CardDetailed[] = [
  {
    id: 0,
    title: "Embark on the Uncharted Path",
    description:
      "Venture into the unknown realms of existence, where each step leads to untold stories and unexpected encounters. Explore the uncharted territories of life, embracing the thrill of discovery and the beauty of uncertainty. Join us on a journey of endless possibilities and infinite wonders",
    img: one,
  },
  {
    id: 1,
    title: "Overlaid the jeepers uselessly much excluding everyday life.",
    description:
      "Overlaid with a sense of adventure and curiosity, our journey transcends the ordinary, offering a glimpse into the extraordinary. Discover the boundless possibilities that await as we navigate through life's moments with purpose, passion, and a touch of whimsy, making each day an exhilarating exploration.",
    img: two,
  },
]

export const GET: RequestHandler = async () => {
  return json({ aboutCards }, { status: 200 })
}
