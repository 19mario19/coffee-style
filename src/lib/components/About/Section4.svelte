<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import Title from "$lib/shared/Title.svelte"
  import { ContainerDimentions } from "$lib/types/types"
  import type { CardDetailed } from "$lib/types/types"

  export let timeline: CardDetailed[]
</script>

<Container dimentions={ContainerDimentions.Small}>
  <div class="section4">
    <Title title="history timeline">
      <div class="t-list">
        {#each timeline as event, index (index)}
          <div class="event">
            <p class="date">
              <span class="overlay">0{index + 1}</span>
              {event.createdAt}
            </p>
            <h3>{event.title}</h3>
            {#if event.description}
              <p class="description">{event.description}</p>
            {/if}
            <div class="box">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        {/each}
      </div>
    </Title>
  </div>
</Container>

<style>
  .section4 {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    gap: 1rem;
  }

  .t-list {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
  }

  .event {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .date {
    position: relative;
    color: var(--secondary-color);
    z-index: 1;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1.5px;
  }

  .overlay,
  .box,
  .box > * {
    color: var(--secondary-05-color);
    opacity: 0.3;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);

    font-size: 40px;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    z-index: -1;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
  }
  .description {
    color: var(--secondary-color);
    max-width: 500px;
    margin: 0 auto;
  }

  .box {
    border-top: 1px solid;
    display: flex;
    align-items: center;
    height: 60px;
    width: 200px;

    opacity: 0.7;

    margin: 0 auto;
    margin-top: 2rem;
  }
  .box > * {
    height: 100%;
    width: 100%;
  }

  .left {
    border-right: 1px solid;
  }
  .right {
    border-left: 1px solid;
  }
</style>
