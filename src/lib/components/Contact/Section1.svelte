<script lang="ts">
  import Container from "$lib/shared/Container.svelte"
  import { ContainerDimentions } from "$lib/types/types"
  import type { Address } from "$lib/db/dbAddresses"
  import Title from "$lib/shared/Title.svelte"

  export let addresses: Address[]

  console.log(addresses)
</script>

<Container dimentions={ContainerDimentions.Big}>
  <div class="section1">
    <div class="overlay" />
    <Container dimentions={ContainerDimentions.Medium}>
      <div class="top">
        <h2>Let's Connect</h2>
        <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis.
        </p>
      </div>
      <Title title="our offices">
        <div class="office">
          {#each addresses as address (address.id)}
            <div class="card">
              <div class="img">
                <span><img src={address.img} alt={address.fullCity} /></span>
              </div>
              <div class="content">
                <p class="country">{address.country}</p>
                <p class="full-city">{address.fullCity}</p>
                <div class="address">
                  {#each Array.from(Object.values(address.place)) as item}
                    <p>{item}</p>
                  {/each}
                </div>
                <div class="o-times">
                  <h3>OPENING TIMES</h3>
                  <div class="times">
                    <div class="t-range">
                      {#each address.openingTimes.openingTimesRange as item}
                        <p class="range">
                          {item.from.day} - {item.to.day}
                          {item.from.hour.hour}:{item.to.hour.minutes} to {item
                            .to.hour.hour}:{item.to.hour.minutes}
                        </p>
                      {/each}
                    </div>
                    <div class="t-day">
                      {#each address.openingTimes.openingTimesDaily as item}
                        <p class="range">
                          {item.day}
                          {item.startTime.hour}:{item.startTime.minutes} to {item
                            .endTime.hour}:{item.endTime.minutes}
                        </p>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </Title>
    </Container>
  </div>
</Container>

<style>
  .section1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--light-gray);
    position: relative;
    z-index: 2;
  }
  .overlay {
    background-color: white;

    position: absolute;
    inset: 50% 0 0 0;
    z-index: -1;
  }
  h2 {
    font-size: 35px;
  }
  .top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 17rem;
    margin: 5rem;
  }

  .section1 {
    border-radius: 5px;
  }

  .office {
    display: flex;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    z-index: 999;
    margin: 2rem 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  span > img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .office > * {
    color: var(--secondary-color);
  }

  .full-city {
    color: var(--primary-color);
    font-size: 20px;
  }

  .o-times h3 {
    margin: 1rem;
  }

  .content .country,
  .content .o-times h3 {
    font-size: 14px;
    letter-spacing: 1.5px;
    font-weight: 500;
    line-height: 30px;
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .office {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .overlay {
      inset: 0;
    }
    .top {
      margin: 2rem 1rem;
    }
  }
</style>
