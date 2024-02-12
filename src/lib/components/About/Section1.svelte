<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import Title from "$lib/shared/Title.svelte"
  import Card from "$lib/shared/about/Card.svelte"
  import { ContainerDimentions, type CardDetailed } from "$lib/types/types"
  import bg from "$lib/img/About/bg.jpg"

  export let aboutCards: CardDetailed[]
</script>

<Container dimentions={ContainerDimentions.Big}>
  <div class="section1">
    <div class="overlay" />
    <Container dimentions={ContainerDimentions.Medium}>
      <div class="top">
        <h2>About</h2>
        <p class="subtitle">
          At our core, we're more than just a brand; we're a community fueled by
          a shared love for great coffee. With a dedicated team of experts, we
          strive to bring you the finest blends, carefully crafted to elevate
          your coffee experience and create memorable moments, one cup at a
          time."
        </p>
      </div>
      <div class="bg"><img src={bg} alt="" /></div>
      <Title title="instructions">
        <div class="content">
          <div class="top">
            <h3>
              Overlaid the jeepers uselessly much excluding everyday life.
            </h3>
            <p class="subtitle">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>
          </div>
          <div class="bottom">
            {#each aboutCards as card}
              <Card aboutCard={card} />
            {/each}
          </div>
        </div>
      </Title>
    </Container>
  </div>
</Container>

<style>
  * {
    z-index: 1;
  }

  .bg {
    z-index: 1;
  }
  .bg > img {
    max-height: 300px;
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
  }

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
    inset: 25% 0 0 0;
    z-index: -1;
  }

  h3 {
    font-size: 28px;
    line-height: 47px;
  }

  h2,
  h3,
  p {
    max-width: 700px;
    margin: 0 auto;
  }
  h2 {
    font-size: 35px;
    margin-bottom: 1rem;
  }
  .top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 4rem 0;
    margin-top: 7rem;
  }

  .section1 {
    border-radius: 5px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .content > .top {
    margin: 3rem;
  }

  .bottom {
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
