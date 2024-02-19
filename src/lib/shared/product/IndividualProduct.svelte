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

    // conver product to cart item
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
      <img src={product.img} alt="" />
    </div>
    <div class="content">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div class="price">
        <p>
          {#if product.newPrice}
            <span class="new-price">{product.newPrice}</span>
          {/if}
          <span class="old-price">{product.oldPrice}</span>
        </p>
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
    <div class="details">
      <h3>Details:</h3>
      <p>{product.details}</p>
    </div>
    <div class="dimensions">
      <h3>Dimensions:</h3>
      <p class="dot"><span>Length (in):</span> {product.dimensions.length}</p>
      <p class="dot"><span>Height (in):</span> {product.dimensions.height}</p>
      <p class="dot"><span>Width (in):</span> {product.dimensions.width}</p>
      <p class="dot"><span>Weight (in):</span> {product.dimensions.weight}</p>
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

  p,
  h3,
  h2 {
    text-align: start;
  }

  .img img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
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

  @media screen and (max-width: 1000px) {
    .individualProduct {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
  }
</style>
