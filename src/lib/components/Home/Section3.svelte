<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import CProduct from "$lib/shared/Product.svelte"
  import Title from "$lib/shared/Title.svelte"
  import { ContainerDimentions, type Product } from "$lib/types/types"
  let title = "FEATURED MUGS"

  export let featuredProducts: Product[] = []
</script>

<Container dimentions={ContainerDimentions.Medium}>
  <Title {title}>
    <div class="section3">
      <div class="product-list">
        {#each featuredProducts as product (product.id)}
          <CProduct {product} />
        {/each}
      </div>
    </div>
  </Title>
</Container>

<style>
  .section3 {
    display: flex;
  }
  .product-list {
    display: flex;
    gap: 1rem;
  }
  /* Media */
  @media screen and (max-width: 717px) {
    .product-list {
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
