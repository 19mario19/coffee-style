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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        provident mollitia consequuntur, fuga recusandae pariatur veniam
        possimus molestiae harum officiis laboriosam beatae, facere quaerat eos
        delectus dolores nesciunt dicta, libero soluta neque corporis. Odit
        distinctio labore veniam quae nulla dicta alias error asperiores tempore
        laboriosam quo accusantium quia hic illum numquam quisquam earum
        explicabo voluptatibus debitis exercitationem quibusdam dolor, possimus
        facilis. Eius itaque impedit vitae. Minima dolores, sit doloribus,
        voluptate voluptatibus mollitia voluptatem nobis quod, minus ea
        dignissimos atque in quam repudiandae velit adipisci laboriosam
        consequuntur perspiciatis. Assumenda amet iste adipisci et placeat,
        quidem non nemo praesentium, cupiditate mollitia eaque.
      </p>
    </div>
  </div>
</div>

<style>
  .section1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .section1 .content > * {
    max-width: 550px;
    padding: 2rem;
  }
  .left {
    background-color: var(--primary-color);
    display: flex;
    justify-content: flex-end;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .left {
    max-height: 100%;
  }
  .right {
    background-color: var(--primary-color);
  }
  p {
    color: white;
  }

  @media screen and (max-width: 717px) {
    .section1 {
      display: flex;
      flex-direction: column-reverse;
    }
  }
</style>
