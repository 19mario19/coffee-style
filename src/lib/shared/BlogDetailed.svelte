<script lang="ts">
  import type { Blog } from "$lib/types/types"

  export let blog: Blog

  import { Route } from "$lib/types/types"
  
</script>

<div class="card">
  <div class="top">
    <div class="overlay" />
    <img src={blog.img} alt={blog.title} />

    <a href={`/blog/${blog.id}`} >
      <button class="details">READ THE WHOLE STORY</button>
    </a>
  </div>

  <div class="bottom">
    <h4>NEW ARTICLE IS LIVE</h4>
    <h3>{blog?.title}</h3>
    <p class="description">{blog.description}</p>
    <a href={`/blog/${blog.id}`} >READ THE FULL STORY</a>
  </div>
</div>

<style>
  img {
    width: 100%;
    height: 100%;
    min-height: 420px;
    object-fit: cover;
  }

  img,
  .card {
    border-radius: 2px;
  }

  h3 {
    font-size: 29px;
    line-height: 40px;
    color: var(--primary-color);
  }

  h4 {
    font-size: 13px;
    letter-spacing: 2px;
  }

  p {
    color: var(--secondary-color);
  }

  p.description {
    color: var(--secondary-05-color);
  }

  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
    gap: 2rem;

    overflow: hidden;

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

    a {
      align-self: center;
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
    justify-content: center;
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
</style>
