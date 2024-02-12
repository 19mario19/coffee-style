<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import type { Author } from "$lib/types/types"
  import { ContainerDimentions } from "$lib/types/types"

  export let authors: Author[]
</script>

<Container dimentions={ContainerDimentions.Medium}>
  <div class="section2">
    {#each authors as author}
      <div class="author-card">
        <img src={author.img} alt={author.name} />
        <div class="details">
          <h3>{author.name}</h3>
          <p>{author.position.toUpperCase()}</p>
        </div>
      </div>
    {/each}
  </div>
</Container>

<style>
  .section2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5rem auto;
  }

  .author-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .author-card img {
    width: 100%; /* Adjust image width as needed */
    height: 400px; /* Maintain aspect ratio */
    margin-right: 1rem; /* Add spacing between image and details */
    margin-bottom: 1rem;
    object-fit: cover;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  h3 {
    margin: 0; /* Remove default margin */
    font-size: 1.2rem; /* Adjust font size as needed */
  }

  p {
    margin: 0; /* Remove default margin */
    font-size: 1rem; /* Adjust font size as needed */
    color:var(--primary-color); /* Adjust color as needed */
    font-size: 14px;
    letter-spacing: 1.1px;
  }
</style>
