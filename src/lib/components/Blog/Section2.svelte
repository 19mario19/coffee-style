<script lang="ts">
  import BlogSide from "$lib/shared/BlogSide.svelte"
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions, EBlogCategory } from "$lib/types/types"
  import type { Author, Blog } from "$lib/types/types"
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
          <a href="/about"><p>Read the full Story</p></a>
        </div>
      </div>
      <div class="categories">
        <h3>Categories</h3>
        <div class="c-list">
          {#each Array.from(Object.values(EBlogCategory)) as category}
            <button class="category"><span>{category}</span></button>
          {/each}
        </div>
      </div>
      <div class="authors">
        <h3>Authors</h3>
        <div class="a-list">
          {#each authors as author}
            <button class="category"
              ><span><img src={author.img} alt="" /></span><span
                ><p>{author.name}</p></span
              ></button
            >
          {/each}
        </div>
      </div>
    </div>
  </div>
</Container>

<style>
  .section2 {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;

    /* border: 1px solid var(--primary-color); */
  }

  .top span > img {
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
    gap: 1rem;
  }

  p,
  h3 {
    text-align: start;
  }

  .side,
  .content,
  .c-list,
  .a-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .c-list,
  .a-list {
    gap: .5rem;
  }

  a {
    color: var(--brown-color);
    border-bottom: 2px solid var(--brown-05-color);
    width: fit-content;
    opacity: 0.6;

    transition: var(--a-fast);
  }

  .c-list,
  .a-list {
    margin: 2rem 0;
  }
  button.category {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button.category {
    text-align: start;

    color: var(--primary-color);
    border-left: 2px solid var(--brown-03-color);
    padding: 0.65rem 1.1rem;
    background-color: var(--primary-01-color);

    transition: var(--a-medium);
  }
  button > span {
    font-size: 17px;
  }

  button:hover {
    border-color: var(--brown-color);
    background-color: var(--brown-01-color);
  }

  a:hover {
    opacity: 1;
  }
  .a-list > button > span > img {
    max-height: 50px;
    aspect-ratio: 1;
    object-fit: cover;
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .section2 {
      display: flex;
      flex-direction: column;
    }
  }
</style>
