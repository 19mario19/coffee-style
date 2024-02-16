<script lang="ts">
  import Section1 from "$lib/components/Products/individual/Section1.svelte"
  import type { PageData } from "./$types"

  export let data: PageData
  console.log(data)
</script>


<Section1 product={data.product} />
