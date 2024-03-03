<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import CProduct from "$lib/shared/Product.svelte"
  import Title from "$lib/shared/Title.svelte"
  import { ContainerDimentions, type Product } from "$lib/types/types"
  let title = "MORE PRODUCTS"
  export let notFeaturedProducts: Product[]
</script>

<Container dimentions={ContainerDimentions.Medium}>
  <Title {title}>
    <div class="section4">
      <div class="product-list">
        {#each notFeaturedProducts.slice(0,6) as product (product.id)}
          <CProduct {product} />
        {/each}
      </div>
    </div>
  </Title>
</Container>

<style>
  .section4 {
    display: flex;
  }
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  /* Media */
  @media screen and (max-width: 717px) {
    .product-list {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
