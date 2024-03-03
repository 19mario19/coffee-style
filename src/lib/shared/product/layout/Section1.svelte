<script lang="ts">
  import bg from "$lib/img/Products/layout/bg.jpg"
  import icon_1 from "$lib/img/Products/layout/icon_1.png"
  import icon_2 from "$lib/img/Products/layout/icon_2.png"
</script>

<div class="section1">
  <div class="left">
    <img src={bg} alt="" />
  </div>
  <div class="right">
    <div class="content">
      <h2>Handmade by <strong>CoffeeStyle</strong></h2>
      <h3>
        The most versatile furniture system ever created. Designed to fit your
        life.
      </h3>
      <ul>
        <li>
          <span><img src={icon_1} alt="icon one" /></span>
          <div class="text">
            <h4>Premium Quality</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, tenetur?
            </p>
          </div>
        </li>
        <li>
          <span><img src={icon_2} alt="icon one" /></span>
          <div class="text">
            <h4>Gentle to the Environment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, tenetur?
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  .section1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  h2,
  h3,
  h4,
  p {
    color: white;
    text-align: start;
  }

  .content {
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 5rem;
    justify-content: center;
  }
  .left {
    background-color: var(--primary-color);
    display: flex;
    justify-content: flex-end;
  }

  .left img {
    height: 100%;
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
  .left {
    max-height: 100%;
  }
  .right {
    background-color: var(--primary-color);
    display: flex;
  }

  h3 {
    font-size: 18px;
    line-height: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    display: grid;
    grid-template-columns: 1fr 10fr;
    align-items: center;
    gap: 2rem;
  }

  li span img {
    height: 20px;
  }

  .text h4 {
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
  }

  .text p {
    opacity: 0.6;
  }

  @media screen and (max-width: 1046px) {
    .section1 {
      display: flex;
      flex-direction: column-reverse;
    }

    .content {
      padding: 3rem 2rem;
      gap: 1.5rem;
    }
  }
</style>
