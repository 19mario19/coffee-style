<script lang="ts">
  import type { Product } from "$lib/types/types"
  
  export let product: Product
  
  import  { Route } from "$lib/types/types";

</script>

<div class="card">
  <div class="top">
    <div class="overlay" />
    <img class:sale={product.sale} src={product.img} alt={product.title} />
    {#if product.sale}
      <p class="sale">On Sale.</p>
    {/if}
    <a href={`/products/${product.id}`} >
      <button class="details">EXPLORE MUG</button>
    </a>
  </div>

  <div class="bottom">
    <h3>{product.title}</h3>
    <p class="price">
      {#if product.newPrice}
        $ {product.newPrice.toFixed(2)} USD
      {/if}
      <span class="oldPrice" class:crossed={product.newPrice}>
        $ {product.oldPrice.toFixed(2)} USD
      </span>
    </p>
  </div>
</div>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img,
  .card {
    border-radius: 2px;
  }

  .card {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    overflow: hidden;

    min-height: 500px;

    max-width: 100%;

    margin: 0 auto;

    margin-bottom: 3rem;
  }

  @media screen and (max-width: 717px) {
    .card {
      flex-direction: column;
      max-width: 100%;
      height: auto;
    }
  }

  .top {
    display: flex;
    flex: 2;
    position: relative;
    overflow: hidden;
  }

  button.details {
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;

    opacity: 0;

    align-self: center;
    margin: 1rem;

    z-index: 1;

    background-color: white;
    padding: 1rem 2rem;
  }

  .top:hover {
    cursor: pointer;
  }
  .top:hover button {
    transform: translateY(-10px);
    opacity: 1;
  }
  .overlay {
    position: absolute;
    inset: 0;
    background-color: var(--primary-color);
    opacity: 0;
    z-index: 0;
    border-radius: 3px;
  }

  .top:hover .overlay {
    opacity: 0.15;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  p.sale {
    background-color: white;
    color: var(--brown-color);
    padding: 0.5rem 1rem;
  }

  p.price {
    color: var(--brown-color);
    font-size: 19px;
  }

  span.crossed {
    text-decoration-line: line-through;
  }

  p .oldPrice {
    color: var(--secondary-05-color);
    font-size: 16px;
  }

  .top {
    position: relative;
  }

  p.sale {
    position: absolute;
    top: 15px;
    right: 15px;

    font-size: 16px;
    font-weight: bold;
  }
  .overlay,
  button.details {
    transition: var(--a-medium);
  }

  button.details:hover {
    opacity: 0.75;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
</style>
