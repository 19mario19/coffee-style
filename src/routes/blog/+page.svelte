<script lang="ts">
  import Section1 from "$lib/components/Blog/Section1.svelte"
  import Section2 from "$lib/components/Blog/Section2.svelte"

  import Subscribe from "$lib/shared/Subscribe.svelte"
  import type { PageData } from "./$types"

  export let data: PageData
</script>

<Section1 blogs={data.blogs} />
<Section2 blogs={data.blogs} authors={data.authors} />
<Subscribe />
