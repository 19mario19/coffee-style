<script lang="ts">
  import "../app.css"
  import type { LayoutData } from "./$types"
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import Cart from "$lib/components/Cart/Cart.svelte"
  import Subscribe from "$lib/shared/Subscribe.svelte"
 
  import { shoppingCart } from "$lib/classes/shoppingCart"
  import { page } from "$app/stores"


  let notToRenderSubscribe = ["/contact", "/styleguide"]

  let param = $page.route.id?.split("/") ?? []

  export let data: LayoutData
</script>

<div class="fixed">
  <Navbar data={data.navbarList} />
</div>
<div class="layout">
  <Cart cartList={$shoppingCart} />
  <slot />
  {#if !notToRenderSubscribe.includes(param[1] ?? "")}
    <Subscribe />
  {/if}
  <Footer />
</div>

<style>
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .layout {
    overflow-x: hidden;
    margin-top: 3rem;
  }
</style>
