<script>
  export let title = "Title"
</script>

<div class="title">
  <p>{title.toUpperCase()}</p>
</div>
<slot />

<style>
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
  }

  p {
    position: relative;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 3px;
    color: var(--primary-color);
  }

  .title p::after,
  .title p::before {
    content: "";
    height: 1.5px;
    width: 36px;
    position: absolute;
    top: 50%;
    background-color: var(--primary-05-color);
  }
  .title p::after {
    right: calc(100% + 15px);
  }

  .title p::before {
    left: calc(100% + 15px);
  }
</style>
