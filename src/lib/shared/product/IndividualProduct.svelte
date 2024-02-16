<script lang="ts">
  import type { Product } from "$lib/types/types"

  export let product: Product

  console.log(product)
</script>

<div class="individualProduct">
  <img src={product.img} alt="" />
  <div class="image">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eos.
  </div>
  <div class="image">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eos.
  </div>
  <div class="image">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eos.
  </div>
</div>

<style>
  .individualProduct {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;

    border: 1px solid red;
  }

  .individualProduct > * {
    border: 1px solid var(--primary-color);

  }

  img {
    max-height: 500px;
    aspect-ratio: 1;
    object-fit: cover;
  }
</style>
