<template>
  <div class="menu__container">
    <div class="menu__logo">
      <img src="@/assets/sw_planets_logo.svg" />
    </div>
    <div class="menu__buttons">
      <Buttons text="Play" class="button" path="planets"></Buttons>
      <Buttons class="button" text="Intro" path="/"></Buttons>
      <Buttons text="About" class="button" path="about"></Buttons>
    </div>
  </div>
</template>
<script>
import Buttons from "@/components/Buttons";
export default {
  name: "MenuContent",
  components: { Buttons }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.menu {
  &__logo {
    background: #000;
  }
  &__container {
    max-width: 500px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: menu__container 5s;
    animation-fill-mode: both;
    z-index: 900;
  }

  @keyframes menu__container {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &__buttons {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>