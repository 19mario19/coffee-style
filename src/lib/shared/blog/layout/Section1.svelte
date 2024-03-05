<script lang="ts">
  import CBlog from "$lib/shared/Blog.svelte"
  import Container from "$lib/shared/Container.svelte"
  import Title from "$lib/shared/Title.svelte"
  import { ContainerDimentions, type Blog } from "$lib/types/types"

  export let featuredBlogs: Blog[]

</script>

<Container dimentions={ContainerDimentions.Medium}>
  <div class="section1">
    <Title title="furether reading">
      <div class="featured-posts">
        {#each featuredBlogs.slice(1, 3) as blog (blog.id)}
          <CBlog {blog} />
        {/each}
      </div>

      <a href="/blog">VIEW ALL ARTICLES</a>
    </Title>
  </div>
</Container>

<style>
  .section1 {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
  }
  .featured-posts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    z-index: 999;
  }

  @media screen and (max-width: 717px){
    .featured-posts{
        grid-template-columns: 1fr;
    }
  }

  a {
    background-color: var(--primary-color);
    color: white;

    width: fit-content;

    margin: 0 auto;

    padding: 1rem 1.3rem;

    margin-top: 1rem;

    border: 2px solid white;

    letter-spacing: 1.2px;
    font-size: 13px;

    overflow: hidden;

    transition: var(--a-medium);
    outline: 2px solid transparent;
  }

  a:hover {
    outline: 2px solid var(--primary-color);
    background-color: white;
    color: var(--primary-color);
  }
</style>
