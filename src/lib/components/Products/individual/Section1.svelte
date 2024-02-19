<script lang="ts">
  import IndividualProduct from "$lib/shared/product/IndividualProduct.svelte"
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions, type Product } from "$lib/types/types"

  export let product: Product
</script>

<div class="section1">
    <IndividualProduct {product} />
  
</div>

<style>
  .section1 {
    display: flex;


  }
</style>
