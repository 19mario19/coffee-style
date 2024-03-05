<script lang="ts">
  import { ContainerDimentions } from "$lib/types/types"
  import Container from "./Container.svelte"
</script>

<Container dimentions={ContainerDimentions.Big}>
  <div class="subscribe">
    <div class="content">
      <h3>SIGN UP AND GET FREE COFFEE BAGS</h3>
      <h2>Coffee Updates</h2>
    </div>
    <div class="input">
      <input type="text" placeholder="CUSTOMER@COFFEESTYLE.IO" />
      <button>SUBSCRIBE</button>
    </div>
  </div>
</Container>

<style>
  .subscribe {
    display: flex;
    background-color: var(--primary-color);
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 6rem 0;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  .input {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    width: fit-content;
  }

  input {
    background-color: var(--primary-color);
    border: 1px solid var(--secondary-color);
    color: white;
    padding: 1rem 2rem;
    flex: 1;
    width: 300px;
    text-align: center;
  }

  input::placeholder {
    color: white;
    opacity: 0.6;
  }

  button {
    background-color: white;
    color: var(--primary-color);

    padding: 1rem 1.3rem;

    border: 2px solid white;

    letter-spacing: 1.2px;
    font-size: 13px;
    font-weight: 600;

    overflow: hidden;

    transition: var(--a-medium);
    outline: 2px solid transparent;
  }

  button:hover {
    outline: 2px solid var(--primary-color);
    background-color: var(--secondary-color);
    color: white;
  }

  h2 {
    font-size: 38px;
  }

  h3 {
    position: relative;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2.5px;
    color: var(--secondary-color);
  }
  h3::after,
  h3::before {
    content: "";
    height: 1.5px;
    width: 36px;
    position: absolute;
    top: 50%;
    background-color: var(--secondary-05-color);
  }
  h3::after {
    right: calc(100% + 5px);
  }
  h3::before {
    left: calc(100% + 5px);
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .subscribe {
      padding: 3rem 2rem;
    }
    h3::before,
    h3::after {
      content: none;
    }
    button,
    input {
      width: 100%;
    }

    .input {
      flex-direction: column;
      gap: 1rem;
      margin: 0 auto;
      width: 100%;
    }
  }
</style>
