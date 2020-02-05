<template>
  <div class="container">
    <MenuContent></MenuContent>
  </div>
</template>

<script>
import MenuContent from "@/components/MenuContent";
export default {
  name: "Play",
  components: { MenuContent }
};
</script>

<style lang="scss">
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
</style>
