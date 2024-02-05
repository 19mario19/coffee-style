<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions, type CardDetailed } from "$lib/types/types"

  export let section1: CardDetailed
</script>

<Container>
  <div class="section1">
    <div class="overlay" />
    <Container dimentions={ContainerDimentions.Small}>
      <div class="info">
        <p class="subtitle">{section1.subtitle}</p>
        <h1>{section1.title}</h1>
        <p class="description">{section1.description}</p>
        <a href="/products">{section1.buttonName}</a>
      </div>
    </Container>
  </div>
</Container>

<style>
  .section1 {
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    background-color: black;

    background-image: url("../../img/Home/Section1/bg.jpg");
    background-size: cover;
    background-position: bottom;

    height: 500px;

    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-color: var(--dark-blue);
    z-index: 0;
    opacity: 0.5;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .info > * {
    z-index: 10;
  }

  p,
  a {
    font-weight: 600;
  }
  p {
    color: white;
    font-size: 17px;
  }
  p.subtitle {
    letter-spacing: 1.2px;
    font-size: 13px;
    opacity: 0.8;
    line-height: 18px;
  }
  p.description {
    opacity: 0.9;
    line-height: 30px;
  }
  h1 {
    color: white;
  }

  .info a {
    background-color: white;
    color: var(--primary-color);

    width: fit-content;
    padding: 1rem 1.3rem;

    align-self: center;

    margin-top: 1rem;

    border: 2px solid white;
    outline: 2px solid var(--primary-color);

    letter-spacing: 1.2px;
    font-size: 13px;

    transition: var(--a-medium);
  }

  .info a:hover {
    outline: 2px solid transparent;
    background-color: var(--primary-color);
    color: white;
  }
</style>
