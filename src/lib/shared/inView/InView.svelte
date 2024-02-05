<script lang="ts">
  /**
   * Even if it works, and I do understand that when intersecting an element,
   * it fires the event.
   * But I do not understand how this is accoplished
   *
   */

  import { inview } from "svelte-inview"
  import type { ObserverEventDetails, Options } from "svelte-inview"

  let isInView = false
  const options: Options = {
    rootMargin: "10px",
    unobserveOnEnter: true,
  }
  function handleChange(event: CustomEvent<ObserverEventDetails>) {
    let { detail } = event
    isInView = detail.inView
  }
</script>

<div
  class="wrapper"
  class:isInView
  use:inview={options}
  on:inview_change={handleChange}
>
  <slot />
</div>

<style>
  .wrapper {
    display: flex;
  }

  .isInView {
    animation: up 1s ease 0.7s forwards;
  }
  @keyframes up {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>
