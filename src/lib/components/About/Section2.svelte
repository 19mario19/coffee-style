<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import Title from "$lib/shared/Title.svelte"
  import type { Author } from "$lib/types/types"
  import { ContainerDimentions } from "$lib/types/types"

  export let authors: Author[]
</script>

<Container dimentions={ContainerDimentions.Medium}>
    <Title title="introductions">

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
    </Title>
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
    width: 100%; 
    height: 400px;  
    margin-right: 1rem;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  h3 {
    margin: 0;  
    font-size: 1.2rem;
  }

  p {
    margin: 0;  
    font-size: 1rem; 
    color:var(--primary-color); 
    font-size: 14px;
    letter-spacing: 1.1px;
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .section2 {
      flex-direction: column;
      gap: 2rem;
    }

    .author-card {
        width: 100%;
    }

    
  }
</style>
