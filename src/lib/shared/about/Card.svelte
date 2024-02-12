<script lang="ts">
  import type { CardDetailed } from "$lib/types/types"

  export let aboutCard: CardDetailed
</script>

<div class="card">
  <div class="left">
    <h3>{aboutCard.title}</h3>
    <hr class="custom-hr" />
    <p>{aboutCard.description}</p>
  </div>
  <div class="right">
    <span><img src={aboutCard.img} alt="" /></span>
  </div>
</div>

<style>
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
  }

  h3,
  p {
    text-align: start;
  }

  span > img {
    object-fit: cover;
    max-width: 100%;
    min-height: 400px;
  }
  h3 {
    font-size: 24px;
    line-height: 35px;
  }
  .custom-hr {
    display: block;
    height: 2px;
    width: 20px;
    border: none;
    background-color: var(--primary-05-color); /* Change color as needed */
    margin: 0; /* Remove default margin */
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .card {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
