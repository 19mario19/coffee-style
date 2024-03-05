<script lang="ts">
  import BlogDetailed from "$lib/shared/BlogDetailed.svelte"
  import Container from "$lib/shared/Container.svelte"
  import CProduct from "$lib/shared/Product.svelte"
  import {
    ContainerDimentions,
    ECategory,
    type Product,
    type NavbarList,
    type Blog,
    type NavbarItem,
  } from "$lib/types/types"
  let list = Array.from(Object.values(ECategory)).map((el, index) => ({
    id: index,
    name: el,
  }))
  let navbarList: NavbarList = {
    list,
    active: list[0],
  }

  function setActive(newActive: NavbarItem) {
    navbarList.active = newActive
  }

  export let blogs: Blog[]

  export let products: Product[]

  let filteredProducts: Product[] = [...products]
  function filter(category: any) {
    if (category === ECategory.All) {
      filteredProducts = [...products]
    } else {
      filteredProducts = [...products].filter((product) =>
        product.category?.includes(category),
      )
    }
  }
</script>

<Container dimentions={ContainerDimentions.Medium}>
  <div class="section1">
    <div class="top">
      <h2>Our Products</h2>
      <p class="subtitle">
        Discover premium mugs, tea cups, and more – quality crafted for your
        perfect sipping experience.
      </p>
    </div>
    <div class="main">
      <div class="categories">
        <ul>
          {#each navbarList.list as item, index (index)}
            <li>
              <button
                on:click={() => {
                  setActive(item)
                  filter(item.name)
                }}
                class:active={item.id === navbarList.active.id}
                >{item?.name.toUpperCase()}</button
              >
            </li>
          {/each}
        </ul>
      </div>
      {#if navbarList.active === list[0]}
        <div class="blog">
          <BlogDetailed blog={blogs[0]} />
        </div>
      {/if}
    </div>
    <div class="bottom">
      {#each filteredProducts as product}
        <CProduct {product} />
      {/each}
    </div>
  </div>
</Container>

<style>
  .section1 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 3rem 0;
  }
  /* Media */
  @media screen and (max-width: 717px) {
    .bottom {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  button {
    font-weight: 500;
    color: var(--brown-color);
    border: 1px solid var(--secondary-05-color);
    padding: 0.5rem 1.2rem;
    opacity: 0.5;
    transition: var(--a-medium);
  }

  button:hover {
    opacity: 1;
  }

  button.active {
    border-color: var(--brown-color);
    opacity: 1;
  }

  h2 {
    font-size: 35px;
  }
  .top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
    margin-top: 5rem;
  }

  .categories {
    margin: 1rem;
  }

  .categories ul {
    position: relative;
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
  }
  .categories ul::after,
  .categories ul::before {
    content: "";
    height: 1.5px;
    width: 36px;
    position: absolute;
    top: 50%;
    background-color: var(--secondary-05-color);
    opacity: 0.3;
  }
  .categories ul::after {
    right: calc(100% + 10px);
  }
  .categories ul::before {
    left: calc(100% + 10px);
  }

  @media screen and (max-width: 717px) {
    .categories ul {
      flex-direction: column;
      width: 100%;
    }

    ul li button {
      width: 100%;
    }

    button {
      display: block;
    }
    ul::before,
    ul::after {
      display: none;
    }
  }
</style>
