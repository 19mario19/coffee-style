import type { LayoutServerLoad } from "./$types"
import { Route, type NavbarList } from "$lib/types/types"
import logo from "$lib/img/Navbar/icon.png"

let navbarList: NavbarList = {
  logo,
  list: [
    { id: 0, name: "Home", link: Route.Home },
    { id: 1, name: "Our Products", link: Route.Products },
    { id: 2, name: "Blog", link: Route.Blog },
    { id: 3, name: "About", link: Route.About },
    { id: 4, name: "Contact", link: Route.Contact },
  ],
  active: { id: 0, name: "Home", link: Route.Home },
}

export const load = (async () => {
  return { navbarList }
}) satisfies LayoutServerLoad


