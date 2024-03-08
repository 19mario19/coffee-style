<script lang="ts">
  import "../app.css"
  import type { LayoutData } from "./$types"
  import { Route } from "$lib/types/types"
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import Cart from "$lib/components/Cart/Cart.svelte"

  import { shoppingCart } from "$lib/classes/shoppingCart"
  import { page } from "$app/stores"
  import { CLocalStorage } from "$lib/classes/localStorage"

  $: route = $page.route.id?.split("/")[1] || "home"
  if (route) {
  }

  $: if ($page.route.id && route) {
    const lsActive = new CLocalStorage("active")
    lsActive.set(route.charAt(0).toUpperCase() + route.slice(1))
  }

  export let data: LayoutData
</script>

<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>

<div class="fixed">
  <Navbar data={data.navbarList} />
</div>
<div class="layout">
  <Cart cartList={$shoppingCart} />
  <slot />
  <Footer />
</div>

<style>
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
  }
  .layout {
    overflow-x: hidden;
    margin-top: 3rem;
  }
</style>
