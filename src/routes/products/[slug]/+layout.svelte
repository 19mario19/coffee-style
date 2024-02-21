<script lang="ts">
  import type { LayoutData } from "./$types"
    import Section1 from "$lib/shared/product/layout/Section1.svelte"
    import Section2 from "$lib/shared/product/layout/Section2.svelte"
  export let data: LayoutData
</script>

<div class="layout">
  <slot />
  <Section1 />
  <Section2 />


</div>

<style>
  .layout {
    margin-top: 3rem;
  }
</style>
