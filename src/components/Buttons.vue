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
  font-family: "Barlow", sans-serif;
  background-color: #ffdd33;
  color: #000;
  padding: 12px 32px 9px;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  border-radius: 2px;
  text-decoration: none;
  border: none;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: center;

  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #ffff44;
  }
  @media (min-width: 767px) {
    margin-bottom: 0;
    margin-left: 15px;
  }

  &:first-child {
    margin-left: 0;
  }
}
</style>
