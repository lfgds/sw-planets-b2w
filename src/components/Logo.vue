<template>
  <section>
    <div class="logo">
      <img src="../assets/Star_Wars_Yellow_Logo.svg" />
    </div>
  </section>
</template>
<script>
export default {
  name: "LogoStarWars"
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  position: absolute;
  top: 30%;
  z-index: 1;
  margin: auto;
  animation: logo 9s ease-out 9s;
  opacity: 0;
}

.logo img {
  width: inherit;
  overflow: hidden;
}

@keyframes logo {
  0% {
    width: 30em;
    transform: scale(2.75);
    opacity: 1;
  }
  50% {
    opacity: 1;
    width: 18em;
  }
  100% {
    opacity: 0;
    transform: scale(0.1);
    width: 18em;
  }
}
</style>