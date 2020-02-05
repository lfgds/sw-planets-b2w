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
  max-height: 300px;
}
.loading {
  &__container {
    position: absolute;
    width: 100%;
    justify-content: center;
    display: flex;
    background-color: #000;
    @media (max-width: 767px) {
      height: 100%;
    }
  }
}
</style>
