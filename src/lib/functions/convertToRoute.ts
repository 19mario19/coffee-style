import { Route } from "$lib/types/types"
import type { NavbarItem } from "$lib/types/types"

function convertToRoute(value: string): NavbarItem {
  switch (value) {
    case "home":
      return { id: 0, name: "Home", link: Route.Home }
    case "products":
      return { id: 1, name: "Our Products", link: Route.Products }
    case "blog":
      return { id: 2, name: "Blog", link: Route.Blog }
    case "about":
      return { id: 3, name: "About", link: Route.About }
    case "contact":
      return { id: 4, name: "Contact", link: Route.Contact }
    //Something that does not exist
    default:
      return { id: 11, name: "StyleGuide", link: Route.StyleGuide }
  }
}

export { convertToRoute }
