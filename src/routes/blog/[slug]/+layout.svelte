<script lang="ts">
  import type { LayoutData } from "./$types"

  export let data: LayoutData

  const featuredBlogs = data.featuredBlogs
</script>

<slot />
