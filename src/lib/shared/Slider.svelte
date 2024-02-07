<script lang="ts">
  import type { SvelteComponent } from "svelte"

  let list = Array.from({ length: 20 }, (_, index) => index)

  export let components: SvelteComponent[]

  type State = {
    next: number
    current: number
    prev: number
  }

  let state: State = {
    next: 1,
    current: 0,
    prev: list.length - 1,
  }

  function forward() {
    state.prev = state.current
    state.current = state.next
    state.next = state.next + 1 < list.length ? state.next + 1 : 0
  }

  function backward() {
    state.next = state.current
    state.current = state.prev
    state.prev = state.prev - 1 >= 0 ? state.prev - 1 : list.length - 1
  }

</script>

<div class="slider-container">
  <button on:click={backward} class="click back">{"<"}</button>
  <div class="main">
    <div class="slider">
      {#each list as item, index}
        <div
          class:current={state.current === index}
          class:next={state.next === index}
          class:prev={state.prev === index}
          class="block"
        >
          {item}
        </div>
      {/each}
    </div>
  </div>
  <button on:click={forward} class="click forward">{">"}</button>
</div>

<style>
  .slider-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    border: 2px solid black;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 4;

    border: 3px solid green;
  }

  .back,
  .forward {
    border-radius: 5px;
    height: 100%;
    font-size: 30px;
    color: var(--primary-color);
    opacity: 0.4;

    transition: var(--a-medium);
  }

  .back:hover,
  .forward:hover {
    opacity: 1;
  }

  .slider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    /* min-height: 500px;
    min-width: 600px; */
    height: 100%;
    width: 100%;
    /* overflow: hidden; */
    transition: var(--a-medium);
    position: relative;
    padding: 2rem;
  }

  .block {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;

    background-color: red;

    opacity: 0;

    transition: var(--a-slow);
  }

  .block.current {
    transform: translateX(0);
    z-index: 100;
    opacity: 1;
  }

  .block.next {
    transform: translateX(100%);
    opacity: 0;
    z-index: -1;
  }

  .block.prev {
    transform: translateX(-100%);
    opacity: 0;
    z-index: -1;
  }
</style>
