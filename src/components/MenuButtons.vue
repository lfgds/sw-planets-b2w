<template>
  <div class="content__menu hide">
    <Buttons id="play-game" class="button" text="Play Game" path="planets"></Buttons>
    <Buttons class="button" text="About The App" path="abouttheapp"></Buttons>
    <Buttons class="button" text="About Me" path="aboutme"></Buttons>
  </div>
</template>

<script>
import Buttons from "@/components/Buttons";
export default {
  name: "MenuButtons",
  components: { Buttons }
};
</script>

<style lang="scss">
.content {
  &__menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;

    @media (min-width: 767px) {
      margin-top: -130px;
      flex-direction: row;
      padding: 0;
    }
  }
}
</style>
