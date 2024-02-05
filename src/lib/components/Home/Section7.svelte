<script lang="ts">
  import CBlog from "$lib/shared/Blog.svelte"
  import Container from "$lib/shared/Container.svelte"
  import Title from "$lib/shared/Title.svelte"
  import { ContainerDimentions, type Blog } from "$lib/types/types"
  let title = "BEHIND THE MUGS, LIFESTYLE STORIES"

  export let featuredBlogs: Blog[]
</script>

<Container dimentions={ContainerDimentions.Medium}>
  <Title {title}>
    <div class="section7">
      <div class="blog-list">
        {#each featuredBlogs as blog}
          <CBlog {blog} />
        {/each}
      </div>
    </div>
  </Title>
</Container>

<style>
  .section7 {
    margin: 5rem 0;
  }

  .blog-list {
    display: flex;
    gap: 1rem;
  }
  /* Media */
  @media screen and (max-width: 717px) {
    .blog-list {
      flex-direction: column;
    }
  }
</style>
