<script lang="ts">
  export let imgSrc: string
</script>

<div class="parallax-container">
  <div class="parallax-image" style="background-image: url({imgSrc})"></div>
</div>

<style>
  .parallax-container {
    overflow: hidden;
    height: 340px;
    position: relative;

    width: 100vw;
  }

  .parallax-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Create parallax effect */
  }
</style>
