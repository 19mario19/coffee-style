<script lang="ts">
  import CBlog from "$lib/shared/Blog.svelte"
  import Container from "$lib/shared/Container.svelte"
  import Title from "$lib/shared/Title.svelte"
  import { ContainerDimentions, type Blog } from "$lib/types/types"

  export let blogs: Blog[]
  let firstTwo: Blog[] = blogs.slice(0, 2)
</script>

<Container dimentions={ContainerDimentions.Big}>
  <div class="section1">
    <div class="overlay" />
    <Container dimentions={ContainerDimentions.Medium}>
      <div class="top">
        <h2>Read coffee stories on our Blog</h2>
        <p class="subtitle">
          Dive into our captivating collection of coffee tales and discover the
          rich narratives behind your favorite brews.
        </p>
      </div>
      <Title title="featured-posts">
        <div class="featured-posts">
          {#each firstTwo as blog (blog.id)}
            <CBlog {blog} />
          {/each}
        </div>
      </Title>
    </Container>
  </div>
</Container>

<style>
  .section1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--light-gray);
    position: relative;
}
.overlay {
    background-color: white;
    
    position: absolute;
    inset: 50% 0 0 0;
    z-index: 0;
}
h2 {
    font-size: 35px;
}
.top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 5rem 0;
    margin-top: 7rem;
}

.section1 {
    border-radius: 5px;
}

.featured-posts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    z-index: 999;
}

  /* Media */
  @media screen and (max-width: 717px) {
    .featured-posts{
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
