import type { LayoutServerLoad } from "./$types"
import type { CartList, NavbarList } from "$lib/types/types"
import logo from "$lib/img/Navbar/icon.png"

let navbarList: NavbarList = {
  logo,
  list: [
    { id: 0, name: "Home", link: "/" },
    { id: 1, name: "Our Products", link: "/products" },
    { id: 2, name: "Blog", link: "/blog" },
    { id: 3, name: "About", link: "/about" },
    { id: 4, name: "Contact", link: "/contact" },
    { id: 5, name: "Style Guide", link: "/guide" },
  ],
  active: { id: 0, name: "Home", link: "/" },
}



export const load = (async () => {
  
  return { navbarList }
}) satisfies LayoutServerLoad
