<script lang="ts">
  import { ShoppingCart } from "$lib/classes/shoppingCart"
  import { Toggle, cartToggle } from "$lib/classes/cartToggle"
  import type { CartItem, CartList, ID } from "$lib/types/types"
  export let cartList: CartList
  import { browser } from "$app/environment"
  import { flip } from "svelte/animate"

  const shop: ShoppingCart = new ShoppingCart()

  function update() {
    shop.updateStore()
  }
  function removeItem(id: ID) {
    shop.removeProduct(id)
  }

  const toggleCart = new Toggle()
  $: toggleState = $cartToggle

  function toggle() {
    toggleCart.switch()
  }
  function off() {
    toggleCart.on()
  }

  $: if (browser) {
    if (!toggleState) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="wrapper-container" class:toggleState on:click|self={off}>
  <div class="wrapper" class:toggleState>
    <div class="top">
      <h3>YOUR CART</h3>
      <button on:click={toggle}>X</button>
    </div>

    <div class="cart">
      {#each cartList.products as cartItem (cartItem.id)}
        <div animate:flip={{ duration: 150 }} class="cart-item">
          <div class="left">
            <img src={cartItem.img} alt={cartItem.title} />
            <div class="item-details">
              <p>{cartItem.title}</p>
              <p>${cartItem.price}</p>
              <button on:click={() => removeItem(cartItem.id)} class="remove"
                >REMOVE</button
              >
            </div>
          </div>
          <div class="right">
            <input
              type="number"
              bind:value={cartItem.quantity}
              on:input={update}
              min="1"
              max="10"
            />
          </div>
        </div>
      {/each}
    </div>

    <div class="cart-summary">
      <p>Total Items: <strong>{cartList.products.length}</strong></p>
      <p>Subtotal: <strong>$ {cartList.total.toFixed(2)}</strong></p>
      <button>Continue to Checkout</button>
    </div>
  </div>
</div>

<style>
  .left {
    display: flex;
    gap: 2rem;
  }

  button.remove {
    color: var(--secondary-color);
  }

  input {
    background-color: var(--primary-color);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    text-align: center;
    max-width: fit-content;
    border: 1px solid var(--secondary-color);
  }

  .wrapper-container {
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    justify-content: flex-end;
    background-color: var(--primary-05-color);

    transition: all 450ms ease-in-out;
  }

  .wrapper {
    min-width: 400px;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-left: 1px solid var(--gray-color);

    transition: var(--a-medium);
  }

  .wrapper,
  .cart-item {
    background-color: var(--primary-color);
    color: white;
  }

  .wrapper > * {
    padding: 2rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray-color);
  }

  .top > * {
    font-weight: bold;
  }

  .cart {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    gap: 20px;
    align-self: flex-start;

    overflow-x: hidden;
    overflow-y: scroll;

    /* border: 2px solid yellow; */

    & > * {
      /* border: 2px solid green; */
    }
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .cart-item img {
    max-width: 100px;
    height: 70px;
    width: 50px;
    object-fit: cover;

    border-radius: 5px;
  }

  .item-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .item-details > * {
    text-align: start;
  }
  .item-details p {
    font-size: 18px;
  }

  .cart-summary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 1px solid var(--gray-color);
  }

  .cart-summary > p {
    display: flex;
    justify-content: space-between;
  }

  .cart-summary button {
    background-color: white;
    color: var(--secondary-color);
    padding: 1rem;
    font-weight: 500;
    border-radius: 1px;
    text-transform: uppercase;
    transition: var(--a-medium);
  }

  .cart-summary button:hover {
    background-color: var(--secondary-color);
    color: white;
    opacity: 0.6;
  }

  button {
    color: white;
  }

  .wrapper.toggleState {
    opacity: 0;
    z-index: -1;
    transform: translateX(100%);
  }

  .wrapper {
    transform: translate(0);
    opacity: 1;
    z-index: 999;
  }

  .wrapper-container.toggleState {
    opacity: 0;
    z-index: -1;
  }

  .wrapper-container {
    opacity: 1;
    z-index: 9999;
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .wrapper {
      width: 100%;
    }
  }

  /* scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary-05-color);
  }

  ::-webkit-scrollbar-thumb {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }
</style>
