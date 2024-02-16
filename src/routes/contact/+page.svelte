<script lang="ts">
  import Section1 from "$lib/components/Contact/Section1.svelte"
  import Section2 from "$lib/components/Contact/Section2.svelte"
  import Section3 from "$lib/components/Contact/Section3.svelte"
  import type { PageData } from "./$types"

  export let data: PageData
  console.log(data)
</script>

<Section1 addresses={data.addresses} />
<Section2 />
<Section3 />
