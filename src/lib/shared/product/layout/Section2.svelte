<script lang="ts">
  import Section3 from "$lib/components/Home/Section3.svelte"
  import type { Product } from "$lib/types/types"

  export let featuredProducts: Product[]

</script>

<div class="section2">
  <Section3 title="you might also like these" {featuredProducts} />
</div>

<style>
  .section2 {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
  }
</style>
