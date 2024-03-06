<script lang="ts">
  import type { Blog } from "$lib/types/types"

  export let blog: Blog

  import { CNavbarActive } from "$lib/classes/navActive"
  import { Route } from "$lib/types/types"
  function setActive() {
    const ls = new CNavbarActive()
    ls.setActive({
      id: 11,
      name: "Random",
      link: Route.StyleGuide,
    })
  }
</script>

<div class="card">
  <div class="top">
    <div class="overlay" />
    <img src={blog.img} alt={blog.title} />

    <a href={`/blog/${blog.id}`} on:click={setActive}>
      <button class="details">READ THE WHOLE STORY</button>
    </a>
  </div>

  <div class="bottom">
    <h3>{blog.title}</h3>
    <p class="description">{blog.description}</p>
    <p class="date"><strong>{blog.createdAt}</strong></p>
  </div>
</div>

<style>
  img {
    width: 100%;
    height: 100%;
    min-height: 340px;
    object-fit: cover;
  }

  img,
  .card {
    border-radius: 2px;
  }

  h3 {
    font-size: 21px;
    line-height: 26px;
    color: var(--primary-color);
  }

  p {
    color: var(--secondary-color);
  }

  p.description {
    color: var(--secondary-05-color);
  }

  p.date {
    font-size: 13px;
    color: var(--primary-color);
    opacity: 0.6;
  }

  .card {
    display: flex;
    flex-direction: column;

    gap: 2rem;

    overflow: hidden;

    min-width: 33%;

    margin: 0 auto;

    margin-bottom: 3rem;
  }

  .card > * > * {
    text-align: start;
  }

  .card > * {
    flex: 1;
  }

  @media screen and (max-width: 717px) {
    .card {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      height: auto;
    }

    .card > * > * {
      text-align: center;
    }
  }

  .top {
    display: flex;
    flex: 2;
    position: relative;
    overflow: hidden;
  }

  button.details {
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;

    opacity: 0;

    align-self: center;
    margin: 1rem;

    z-index: 1;

    background-color: white;
    padding: 1rem 2rem;
  }

  .top:hover {
    cursor: pointer;
  }
  .top:hover button {
    transform: translateY(-10px);
    opacity: 1;
  }
  .overlay {
    position: absolute;
    inset: 0;
    background-color: var(--primary-color);
    opacity: 0;
    z-index: 0;
    border-radius: 3px;
  }

  .top:hover .overlay {
    opacity: 0.15;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 2;
  }

  .top {
    position: relative;
  }

  .overlay,
  button.details {
    transition: var(--a-medium);
  }

  button.details:hover {
    opacity: 0.75;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
</style>
