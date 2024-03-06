<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import {
    ContainerDimentions,
    Route,
    type NavbarList,
    type NavbarItem,
  } from "$lib/types/types"
  import cart from "$lib/img/Navbar/cart.png"
  import mobileIcon from "$lib/img/Navbar/mobile.png"
  import { shoppingCart as store } from "$lib/classes/shoppingCart"
  import { Toggle } from "$lib/classes/cartToggle"
  import { navActiveStore, CNavbarActive } from "$lib/classes/navActive"
  const toggleCart = new Toggle()
  function showCart() {
    toggleCart.switch()
  }

  export let data: NavbarList = {
    logo: "",
    list: [
      { id: 0, name: "Home", link: Route.Home },
      { id: 1, name: "About", link: Route.About },
      { id: 0, name: "Contacts", link: Route.Contact },
    ],
    active: { id: 0, name: "Home", link: Route.Home },
  }

  function setActive(newActive: NavbarItem) {
    const ls = new CNavbarActive()
    ls.setActive(newActive)
    data.active = newActive
  }

  let showMenu = true
  function disableMenu() {
    showMenu = true
  }
  function toggleMenue() {
    showMenu = !showMenu
  }

  $: data.active = $navActiveStore
</script>

<div class="container-wrapper">
  <Container dimentions={ContainerDimentions.Medium}>
    <nav>
      <div class="desktop">
        <div class="left">
          <a href={Route.Home}>
            <img src={data.logo} alt="Logo" />
          </a>
        </div>
        <div class="right">
          <ul>
            {#each data.list as item}
              <a on:click={() => setActive(item)} href={item.link}>
                <li class:active={item.id === data.active.id}>
                  {item.name.toUpperCase()}
                </li>
              </a>
            {/each}
          </ul>
          <button class="cart" on:click={showCart}
            ><span><img src={cart} alt="Cart" /></span>
            <span>CART</span><span class="count">{$store.products.length}</span
            ></button
          >
        </div>
      </div>
      <!-- end desktop -->

      <div class="mobile">
        <div class="left">
          <a href={Route.Home} on:click={disableMenu}>
            <img src={data.logo} alt="Logo" />
          </a>
        </div>
        <div class="right">
          <ul class:showMenu>
            {#each data.list as item}
              <a
                on:click={() => {
                  disableMenu()
                  setActive(item)
                }}
                href={item.link}
              >
                <li class:active={item.id === data.active.id}>
                  {item.name.toUpperCase()}
                </li>
              </a>
            {/each}
          </ul>
          <button class="cart" on:click={showCart}
            ><span><img src={cart} alt="Cart" /></span>
            <span>CART</span><span class="count">{$store.products.length}</span
            ></button
          >
          <button class="mobile" on:click={toggleMenue}
            ><span><img src={mobileIcon} alt="Mobile icon" /></span></button
          >
        </div>
      </div>
      <!-- end mobile -->
    </nav>
  </Container>
</div>

<style>
  .container-wrapper {
    background-color: #fffffff7;
    margin: 0 auto;
  }

  .desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .right {
    display: flex;
    gap: 1rem;
  }

  a {
    color: var(--secondary-color);
    font-size: 15px;
  }

  a > img {
    height: 25px;
  }

  ul {
    display: flex;
    gap: 1.8rem;

    align-items: center;
  }

  button.cart,
  li {
    color: var(--primary-color);
    opacity: 0.5;
    font-size: 15px;
    font-weight: 500;
  }
  button.cart {
    display: flex;

    align-items: center;
  }

  li {
    padding: 0.3rem 0.4rem;
    border-radius: 5px;
    transition: all 280ms ease-in;
    font-weight: 500;
  }

  li:hover {
    opacity: 0.7;
  }

  li.active {
    opacity: 1;
  }

  button {
    border-radius: 5px;

    transition: all 180ms ease-in;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    opacity: 0.9;
  }

  span > img {
    max-height: 19px;
  }

  button.mobile span > img {
    max-height: 15px;
    opacity: 0.5;
    transition: all 180ms ease-in;
  }
  button.mobile span > img:hover {
    opacity: 1;
  }

  button.cart {
    position: relative;
    display: flex;
    gap: 0.35rem;
    padding: 0.2rem 0.5rem;

    margin-left: 1.5rem;
  }
  span.count {
    background-color: var(--primary-color);
    color: white;

    border-radius: 50%;

    aspect-ratio: 1;
    height: 100%;
    max-height: 19px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    font-weight: bold;
  }

  .mobile {
    display: none;
  }

  nav {
    z-index: 1;
  }

  /* Media */
  @media screen and (max-width: 892px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.2rem;
    }

    .right ul {
      position: absolute;
      z-index: 100;

      inset: 100% 0 0 0;
      height: calc(100vh - 100%);

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      background-color: white;
      padding: 2rem;
      gap: 3rem;

      transition: all 450ms ease-in-out;
    }

    /* Problem with overflow */

    .right ul.showMenu {
      transform: translateX(100%);
      opacity: 1;
    }

    .right ul {
      transform: translate(0);
      opacity: 1;
    }

    li {
      font-size: clamp(15px, 7.5vw, 35px);
    }
  }
  @media screen and (min-width: 717px) {
  }
</style>
