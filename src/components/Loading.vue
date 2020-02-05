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
.loading {
  &__container {
    position: absolute;
    width: calc(100% - 20px);
    justify-content: center;
    display: flex;
    background-color: #000;
  }
}
</style>
