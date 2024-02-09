<script lang="ts">
  import BlogSide from "$lib/shared/BlogSide.svelte"
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions, type Author, type Blog } from "$lib/types/types"
  import logo from "$lib/img/Navbar/icon.png"

  export let authors: Author[]
  export let blogs: Blog[]
</script>

<Container dimentions={ContainerDimentions.Medium}>
  <div class="section2">
    <main>
      <h3>Latest Posts</h3>
      <div class="blogs">
        {#each blogs as blog (blog.id)}
          <BlogSide {blog} />
        {/each}
      </div>
    </main>
    <div class="side">
      <h3>About Us</h3>
      <div class="content">
        <div class="top">
          <span>
            <img src={logo} alt="" />
          </span>
          <p>
            Discover the heart behind our brand, meet the team, and explore our
            passion for crafting exceptional coffee experiences for you.
          </p>
        </div>
        <div class="categories">
          <h4>Categories</h4>
        </div>
        <div class="authors"></div>
      </div>
    </div>
  </div>
</Container>

<style>
  .section2 {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;

    /* border: 1px solid var(--primary-color); */
  }
  .section2 > * > * {
    border: 1px solid var(--brown-color);
    text-align: start;
  }

  span > img {
    max-height: 25px;
  }
  h3 {
    font-size: 23px;
    padding: 2rem 0;
    border-bottom: 1px solid var(--primary-05-color);
    margin-bottom: 1rem;
  }

  .blogs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  p,
  h4 {
    text-align: start;
  }

  h4 {
    font-size: 20px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  /* Media */
  @media screen and (max-width: 717px) {
    .section2 {
      display: flex;
      flex-direction: column;
    }
  }
</style>
