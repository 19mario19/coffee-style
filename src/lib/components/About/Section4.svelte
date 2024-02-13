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
  }

  .t-list {
    display: flex;
    flex-direction: column-reverse;
  }

  .event {
    margin-bottom: 1rem; /* Add spacing between events */
  }

  .date {
    position: relative; /* Ensure the overlay span is positioned relative to this element */
    color: var(--secondary-color); /* Apply the specified color */
    margin-bottom: 0.5rem; /* Add spacing between date and title */
    z-index: 1;
  }

  .overlay {
    position: absolute; /* Position the overlay span absolute */
    top: 50%; /* Align the top of the overlay with the middle of the date */
    left: 50%; /* Align the left of the overlay with the middle of the date */
    transform: translate(-50%, -70%); /* Center the overlay span */
    color: red;
    font-size: 40px;
    padding: 0.2rem 0.5rem; /* Add padding */
    border-radius: 0.5rem; /* Apply border radius */
    z-index: -1;
    opacity: .5;
  }

  .description {
    color: var(--secondary-color); /* Apply the specified color */
  }
</style>
