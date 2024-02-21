<script lang="ts">
  import type { PageData } from "./$types"
  import Section1 from "$lib/components/Home/Section1.svelte"
  import Section2 from "$lib/components/Home/Section2.svelte"
  import Section3 from "$lib/components/Home/Section3.svelte"
  import Section4 from "$lib/components/Home/Section4.svelte"
  import Section5 from "$lib/components/Home/Section5.svelte"
  import Section6 from "$lib/components/Home/Section6.svelte"
  import Section7 from "$lib/components/Home/Section7.svelte"

  import Subscribe from "$lib/shared/Subscribe.svelte"

  export let data: PageData
</script>

<Section1 section1={data.section1} />
<Section2 section2={data.section2} />
<Section3 featuredProducts={data.featuredProducts} />
<Section4 notFeaturedProducts={data.notFeaturedProducts} />
<Section5 />
<Section6 />
<Section7 featuredBlogs={data.featuredBlogs} />
<Subscribe />

