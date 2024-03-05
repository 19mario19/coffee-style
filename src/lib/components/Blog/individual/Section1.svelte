<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions, type Blog } from "$lib/types/types"
  export let blogData: Blog
  
</script>

<Container dimentions={ContainerDimentions.Big}>
  <div class="section1">
    <Container dimentions={ContainerDimentions.Medium}>
      <div class="top-description">
        <div class="tags">
          <h3>
            TAGS: {#each blogData.category as category}
              <span>#{category.toUpperCase()} </span>
            {/each}
          </h3>
        </div>
        <h1 class="title">{blogData.title}</h1>
        <div class="subtitle"><p>{blogData.description}</p></div>
      </div>
    </Container>
    <div class="content">
      <div class="top">
        <span><img class="bg" src={blogData.img} alt="" /></span>
      </div>
      <Container dimentions={ContainerDimentions.Medium}>
        <div class="main">
          <div class="left">
            <div class="author">
              <p class="written-by">WRITTEN BY</p>
              <span
                ><img
                  src={blogData.author.img}
                  alt={blogData.author.name}
                /></span
              >
              <p class="name">{blogData.author.name}</p>
              <p class="description">{blogData.author.description}</p>
              <a href="/"><p>All author's posts</p></a>
            </div>
          </div>
          <div class="right">
            <div class="date">
              <p>{blogData.createdAt}</p>
              <div class="line" />
            </div>
            <div class="paragraphs">
              {#each blogData.list as item, index (index)}
                {#if item.subheading}
                  <h3 class="subheading">{item.subheading}</h3>
                {/if}
                {#if item.subtitle}
                  <h4 class="subtitle">{item.subtitle}</h4>
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
              {/each}
            </div>
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
  h4,
  p {
    text-align: start;
  }

  .top-description {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 1rem 0;

    max-width: 65%;
  }

  .tags * {
    color: var(--brown-color);
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 1.2px;
  }

  .content {
    border: 1.5px solid var(--primary-03-color);
    padding-bottom: 3rem;
  }

  /* author */
  .author {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border: 1.5px solid var(--primary-03-color);
    transform: translateY(-100px);

    background-color: white;
  }
  .author span img {
    height: 140px;
    width: 225px;
    object-fit: cover;
  }

  .author p.written-by {
    color: var(--secondary-05-color);
    letter-spacing: 1.2px;

    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
  }
  .author p.name {
    color: var(--primary-color);

    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  .author p.description {
    color: var(--secondary-color);

    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  .top span img {
    max-height: 500px;
    object-fit: cover;
  }

  .author a {
    color: var(--brown-color);
    border-bottom: 2px solid var(--brown-03-color);
    width: fit-content;

    transition: all 550ms ease;

    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
  .author a:hover {
    border-color: var(--brown-color);
  }

  /* end author */

  .main {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 3.5rem;
  }
  .date {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 2rem;
  }
  .date .line {
    height: 1px;
    width: 100%;
    background-color: var(--secondary-05-color);
    opacity: 0.4;
  }
  .date p {
    color: var(--secondary-05-color);
  }
  .paragraphs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .paragraphs h3.subheading {
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    color: var(--primary-color);
  }

  .paragraphs h4.subtitle {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    color: var(--primary-color);
  }

  .paragraphs img {
    max-width: 100%;
  }
  p.quotes {
    color: var(--brown-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;

    border-color: var(--brown-03-color);
    border-style: solid;
    border-bottom-width: 1.5px;
    border-left-width: 1.5px;

    padding: 3rem 2rem;

    margin: 0.5rem 0;
  }

  @media screen and (max-width: 717px) {

    .top-description {
        min-width: 100%;
    }

    .content {
        border: none;
    }

     .top span img {
        max-width: 100%;
     }

    .main {
      display: flex;
      flex-direction: column-reverse;
      gap: 0;
    }

    .author {
      width: 100%;
      transform: translate(0);
    }

    a {
      align-self: center;
    }

    .author * {
      text-align: center;
    }

    .author span img {
      width: 100%;
      height: 300px;
    }


    .paragraphs {
        margin: 2rem 0;
    }
  }
</style>
