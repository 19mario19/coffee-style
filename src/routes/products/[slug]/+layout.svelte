<script lang="ts">
  import type { LayoutData } from "./$types"

  export let data: LayoutData
</script>

<div class="layout">
    
    <slot />
</div>

<style>
    .layout {
        margin-top: 3rem;

    }
</style>



