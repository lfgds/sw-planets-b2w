<template>
  <div class="container">
    <ThemeSong></ThemeSong>
    <ALongTime></ALongTime>
    <LogoStarWars></LogoStarWars>
    <TextContent></TextContent>
    <Buttons id="play_menu" class="button" text="Play Menu " path="/play"></Buttons>
  </div>
</template>

<script>
import ALongTime from "@/components/ALongTime";
import LogoStarWars from "@/components/Logo";
import TextContent from "@/components/TextContent";
import ThemeSong from "@/components/ThemeSong";
import Buttons from "@/components/Buttons";
export default {
  name: "Home",
  components: { ALongTime, LogoStarWars, TextContent, ThemeSong, Buttons },

  mounted() {
    setTimeout(() => {
      this.$router.push("/play");
    }, 10 * 9600);
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 767px) {
    padding-top: 0;
    height: auto;
  }
}
.button {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
