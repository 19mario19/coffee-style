<script lang="ts">
  import Section1 from "$lib/components/Products/Section1.svelte"
  import type { PageData } from "./$types"

  export let data: PageData

</script>

<Section1 products={data.products} blogs={data.blogs} />
