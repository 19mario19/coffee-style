<script lang="ts">
  import type { LayoutData } from "./$types"
  import Section1 from "$lib/shared/blog/layout/Section1.svelte"
  import Subscribe from "$lib/shared/Subscribe.svelte"
  export let data: LayoutData

  const featuredBlogs = data.featuredBlogs
</script>

<slot />
<Section1 {featuredBlogs} />
<Subscribe />
