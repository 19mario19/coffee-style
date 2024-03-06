import { writable } from "svelte/store"
import type { NavbarItem } from "$lib/types/types"
import { Route } from "$lib/types/types"
import { CLocalStorage } from "./localStorage"

let navbarItem: NavbarItem | undefined = CLocalStorage.get("active") || {
  id: 11,
  name: "Random",
  link: Route.StyleGuide,
}

const lsInstance = new CLocalStorage<NavbarItem>("active")

const navActiveStore = writable<NavbarItem>(navbarItem)

CLocalStorage.get("active") && navActiveStore.set(CLocalStorage.get("active"))

navActiveStore.subscribe((v) => console.log("Active is => ", v))

interface INavbarActive {
  setActive(newActive: NavbarItem): void
}

class CNavbarActive implements INavbarActive {
  setActive(newActive: NavbarItem): void {
    lsInstance.set(newActive)
    navActiveStore.set(newActive)
  }
}

export { navActiveStore, CNavbarActive }
