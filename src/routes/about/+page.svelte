<script lang="ts">
  import type { PageData } from "./$types"
  import Section1 from "$lib/components/About/Section1.svelte"
  import Section2 from "$lib/components/About/Section2.svelte"
  export let data: PageData
</script>

<Section1 aboutCards={data.aboutCards} />
<Section2 authors={data.authors} />
