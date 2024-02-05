<script lang="ts">
  import one from "$lib/img/Home/Section5/1.jpg"
  import two from "$lib/img/Home/Section5/2.jpg"
  import three from "$lib/img/Home/Section5/3.jpg"

  import Container from "$lib/shared/Container.svelte"
  import Title from "$lib/shared/Title.svelte"
  import { ContainerDimentions } from "$lib/types/types"
  let title = "BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE"
</script>

<Container dimentions={ContainerDimentions.Small}>
  <Title {title}>
    <div class="section5">
      <div class="left">
        <p class="subtitle">PREMIUM OFFER</p>
        <h2>Get Our Coffee Magazine</h2>
        <p class="description">
          The most versatile furniture system ever created. Designed to fit your
          life.
        </p>
        <a href="/products">START SHOPPING</a>
      </div>
      <div class="right">
        <div class="left">
          <img src={one} alt="first" />
        </div>
        <div class="right">
          <img src={two} alt="second" />
          <img src={three} alt="third" />
        </div>
      </div>
    </div>
  </Title>
</Container>

<style>
  .section5 {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Adjust column widths */
    margin: 5rem 0;
    gap: 2rem;
  }
  
  .section5 > .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0;
  }
  
  .section5 > .right {
    
    display: flex;
    
    gap: 1rem;
  }
  .section5 > .right > .left {
    display: flex;

  }
  
  .section5 > .right > .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    gap: 1rem;
  }
  .section5 > .right > .right > * {
    flex: 1;
  }
  
  img {
    object-fit: cover;
    width: 100%;
  }

  h2,
  p,
  a {
    text-align: start;
  }

  a {
    background-color: var(--primary-color);
    color: white;

    width: fit-content;
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

  /* Media */
  @media screen and (max-width: 717px) {
    .section5 {
      display: flex;
      flex-direction: column-reverse;
    }

    .section5 > .right {
      flex-direction: column;
    }

    .section5 > .right > .right {
      flex-direction: row;
    }
    .section5 > .right > .right img{
      width: 10%;
    }
    
    .section5 > .right > .left  {
      max-height: 300px;
    }
  }
</style>
