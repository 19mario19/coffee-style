<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions } from "$lib/types/types"
</script>

<Container dimentions={ContainerDimentions.Medium}>
  <div class="section2">
    <div class="left">
      <h3>CONTACT FORM</h3>
      <p class="subtitle">
        Drop us your message and I'll get back to you as soon as possible.
      </p>
      <form on:submit|preventDefault={() => console.log("Submit")}>
        <div class="input">
          <label>
            <p>NAME</p>
            <input type="text" name="name" placeholder="JAMES COFFEE" />
          </label>
        </div>
        <div class="input">
          <label>
            <p>EMAIL ADDRESS</p>
            <input
              type="email"
              name="email"
              placeholder="CUSTOMER@COFFEESTYLE.IO"
            />
          </label>
        </div>
        <div class="input">
          <label>
            <p>YOUR MESSAGE</p>
            <textarea
              name="message"
              placeholder="HI, I WOULD LIKE TO ASK SOMETHING ABOUT MUGS."
            />
          </label>
        </div>
        <button class="sumbit"> SEND MESSAGE </button>
      </form>
    </div>
    <div class="right">
      <div class="info">
        <h3>CONTACT FORM</h3>
        <h2 class="title">CoffeeStyle. Inc</h2>
        <div class="address">
          <p>Pride Ave,</p>
          <p>Hamlyn Heights</p>
          <p>VIC 3215</p>
          <p>Australia</p>
        </div>
      </div>
      <div class="number">
        <h3>CALL US</h3>
        <p>+1 (415) 555-1212</p>
      </div>
      <div class="email">
        <h3>EMAIL US</h3>
        <p>us@coffeestyle.io</p>
      </div>
    </div>
  </div>
</Container>

<style>
  .section2 {
    padding: 3rem 2rem;
    border: 1px solid var(--primary-03-color);

    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  h3,
  h2,
  p {
    text-align: start;
  }

  /* RIGHT */

  .right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .section2 h3 {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: var(--secondary-color);
    letter-spacing: 1.5px;
    opacity: 0.6;
  }

  .section2 h2 {
    font-size: 23px;
    margin-bottom: 1rem;
  }

  .address p {
    color: var(--secondary-05-color);
  }

  .left,
  .right {
    margin: 0 2rem;
  }

  /* LEFT */

  p.subtitle {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: var(--primary-color);
  }

  .left {
    border-right: 1px solid var(--primary-03-color);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
  }

  .input input,
  .input textarea {
    display: block;
    border: 1px solid var(--primary-03-color);
    padding: 1rem;
    width: 85%;
  }

  textarea {
    border: none; /* Remove default border */
    outline: none; /* Remove default outline */
  }

  button {
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

  button:hover {
    outline: 2px solid var(--primary-color);
    background-color: white;
    color: var(--primary-color);
  }
</style>
