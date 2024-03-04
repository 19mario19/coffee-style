<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions, type Blog } from "$lib/types/types"
  export let blogData: Blog
</script>

<Container>
  <div class="section1">
    <Container dimentions={ContainerDimentions.Medium}>
      <div class="description">
        <div class="tags">
          <h3>
            TAGS: {#each blogData.category as category}
              <span>#{category.toUpperCase()} </span>
            {/each}
          </h3>
        </div>
        <h1 class="title">{blogData.title}</h1>
        <div class="subtitle"><p>{blogData.subtitle}</p></div>
      </div>
    </Container>
    <div class="content">
      <div class="top">
        <span><img class="bg" src={blogData.img} alt="" /></span>
        <div class="author">
          <p class="written-by">WRITTEN BY</p>
          <span
            ><img src={blogData.author.img} alt={blogData.author.name} /></span
          >
          <p class="name">{blogData.author.name}</p>
          <p class="description">{blogData.author.description}</p>
          <a href="/"><p>All author's posts</p></a>
        </div>
      </div>
      <Container dimentions={ContainerDimentions.Medium}>
        <div class="main">
          <div class="date">
            <p>{blogData.createdAt}</p>
            <hr />
          </div>
          <div class="paragraphs">
            {#each blogData.list as item, index (index)}
              {#if item.subtitle}
                <h3 class="subtitle">{item.subtitle}</h3>
              {/if}
              {#if item.description}
                <p class="description">{item.description}</p>
              {/if}
              {#if item.quotes}
                <p class="quotes">{item.quotes}</p>
              {/if}
              {#if item.img}
                <span><img src={item.img} alt="" /></span>
              {/if}
              {#if item.description2}
                <p class="description">{item.description2}</p>
              {/if}
              {#if item.description3}
                <p class="description">{item.description3}</p>
              {/if}
            {/each}
          </div>
        </div>
      </Container>
    </div>
  </div>
</Container>

<style>
  .section1 {
    display: flex;
    flex-direction: column;
  }
  img.bg {
    width: 100%;
  }

  h1,
  h3,
  p {
    text-align: start;
  }

  .description {
  }
  .tags {
  }
  .title {
  }
  .subtitle {
  }
  .content {
  }
  .top {
  }
  .bg {
  }
  .author {
  }
  .author span img {
    height: 140px;
    width: 225px;
    object-fit: cover;
  }
  .written-by {
  }
  .name {
  }
  .main {
  }

  .main .date {
  }
</style>
