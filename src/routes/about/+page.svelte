<script lang="ts">
  import type { PageData } from "./$types"
  import Section1 from "$lib/components/About/Section1.svelte"
  import Section2 from "$lib/components/About/Section2.svelte"
  import Section3 from "$lib/components/About/Section3.svelte"
  import Section4 from "$lib/components/About/Section4.svelte"

  import Subscribe from "$lib/shared/Subscribe.svelte"
  export let data: PageData
</script>

<Section1 aboutCards={data.aboutCards} />
<Section2 authors={data.authors} />
<Section3 />
<Section4 timeline={data.timeline} />
<Subscribe />
