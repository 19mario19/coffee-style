<script lang="ts">
  import type { CartItem, Product, ID } from "$lib/types/types"
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions } from "$lib/types/types"
  import { ShoppingCart } from "$lib/classes/shoppingCart"
  import { Toggle } from "$lib/classes/cartToggle"

  export let product: Product

  const shoppingCart = new ShoppingCart()
  const toggleCart = new Toggle()

  console.log(product)

  let quantity = 1

  function addToCart(id: ID) {
    console.log(id, quantity)

    // convert product to cart item
    let cartItem: CartItem = {
      id,
      quantity,
      price: product.newPrice ?? product.oldPrice,
      title: product.title,
      img: product.img,
    }

    // calling the method on shoppingCart

    shoppingCart.addProduct(cartItem)
    toggleCart.switch()

    quantity = 1
  }
</script>

<Container dimentions={ContainerDimentions.Medium}>
  <div class="individualProduct">
    <div class="img">
      <img src={product.img} alt={product.description} />
      {#if product.sale}
        <p class="sale">On Sale.</p>
      {/if}
    </div>
    <div class="content">
      <h2>{product.title}</h2>
      <p class="description">{product.description}</p>
      <div class="bottom">
        <div class="price-container">
          <p class="price">
            {#if product.newPrice}
              ${product.newPrice.toFixed(2)} USD
            {/if}
            <span class="oldPrice" class:crossed={product.newPrice}>
              ${product.oldPrice.toFixed(2)} USD
            </span>
          </p>
          <h4>QUANTITY</h4>
        </div>
        <div class="input">
          <input
            type="number"
            name="cart-item"
            min="0"
            max="10"
            bind:value={quantity}
          />
          <button on:click={() => addToCart(product.id)}>ADD TO CART</button>
        </div>
      </div>
    </div>
    <div class="details">
      <h3>Details:</h3>
      <p>{product.details}</p>
    </div>
    <div class="dimensions">
      <h3>Dimensions:</h3>
      <ul>
        {#each Object.entries(product.dimensions) as [key, value]}
          <li>
            {key.charAt(0).toUpperCase() + key.slice(1)}
            {#if key === "weight"}
              (oz)
            {:else}
              (in)
            {/if}: <span>{value}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</Container>

<style>
  .individualProduct {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 5rem;
  }

  ul {
    list-style-type: disc;
  }

  p,
  h3,
  h2,
  h4,
  li {
    text-align: start;
  }

  h4 {
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 500;
    line-height: 18px;
  }

  .img img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
  .img {
    position: relative;
  }

  p.sale {
    position: absolute;
    top: 15px;
    right: 15px;

    font-size: 16px;
    font-weight: bold;

    background-color: white;
    color: var(--brown-color);
    padding: 0.5rem 1rem;
  }

  p.price {
    color: var(--brown-color);
    font-size: 30px;
  }

  span.crossed {
    text-decoration-line: line-through;
  }

  p .oldPrice {
    color: var(--secondary-05-color);
    font-size: 16px;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .input {
    /* border: 1px solid red; */
    width: fit-content;
    display: flex;
    gap: 0.5rem;
  }

  .content input {
    border: 1px solid var(--primary-03-color);
    height: 100%;
    background-color: var(--light-gray);
  }

  .content button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .content button,
  .content input {
    padding: 1rem 2rem;
  }

  .details h3,
  .dimensions h3 {
    margin-bottom: 1.5rem;
  }
  p {
    color: var(--secondary-color);
  }

  p.description {
    font-size: 18px;
    line-height: 30px;
  }

  li,
  li span {
    font-size: 16px;
    line-height: 28px;
    cursor:text;
  }

  li {
    color: var(--secondary-color);
    margin-left: .9rem;
  }

  li span {
    color: var(--primary-color);
  }

  @media screen and (max-width: 950px) {
    .individualProduct {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
    }
  }
</style>
