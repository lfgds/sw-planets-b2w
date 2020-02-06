<template>
  <div class="loading__container">
    <img src="../assets/baby-yoda.gif" alt="Loading" />
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.loading {
  &__container {
    width: 240px;
    position: relative;
    background-color: transparent;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 3;
  }
}
</style>
