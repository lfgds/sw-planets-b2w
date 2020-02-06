<template>
  <section>
    <p class="intro">
      A long time ago in a galaxy far,
      <br />far away....
    </p>
  </section>
</template>

<script>
export default {
  name: "ALongTime"
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro {
  position: absolute;
  top: 40%;
  z-index: 1;
  animation: intro 6s ease-out 1s;
  color: rgb(75, 213, 238);
  font-weight: 400;
  font-size: 38px;
  opacity: 0;

  @media (max-width: 767px) {
    font-size: 22px;
  }
}

@keyframes intro {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>