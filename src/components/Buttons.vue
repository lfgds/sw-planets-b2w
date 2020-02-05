<template>
  <router-link :to="path">{{ text }}</router-link>
</template>

<script>
export default {
  name: "Buttons",
  props: ["text", "path"]
};
</script>

<style lang="scss">
.button {
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.15px;
  border-radius: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-family: "Barlow", sans-serif;
  background-color: #ffdd33;
  color: #000;
  padding: 15px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 15px;

  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #ffff44;
  }
  @media (min-width: 767px) {
    margin-bottom: 0;
  }

  &:first-child {
    margin-left: 0;
  }
}
</style>
