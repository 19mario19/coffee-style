<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions, type CardDetailed } from "$lib/types/types"

  export let section2: CardDetailed
</script>

<Container dimentions={ContainerDimentions.Small}>
  <div class="section2">
    <h2>{section2.title}</h2>
    <p>{section2.description}</p>
    <a href="/about"><p>{section2.buttonName}</p></a>
  </div>
</Container>

<style>
  .section2 {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow: hidden;
    margin: 5.7rem 0;
  }

  a {
    color: var(--brown-color);
    border-bottom: 2px solid var(--brown-05-color);
    width: fit-content;
    align-self: center;
    opacity: 0.6;

    transition: var(--a-fast);
  }

  a:hover {
    opacity: 1;
  }
</style>
