<template>
  <div class="about__container">
    <div class="about__content">
      <h1 class="about__title">Star Wars Planets</h1>

      <p>
        The game was developed as a challenge proposed by
        <a href="http://somos.b2wdigital.com/">B2W</a>, which consists of displaying information about a random planet from the Star Wars franchise such as population, climate, terrain and in how many films this planet has been featured in.
      </p>
      <p class="about__social">
        <a href="https://github.com/lfgds" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/lfgsantos/" target="_blank">Linkedin</a>
      </p>
    </div>

    <div class="about__buttons">
      <Buttons class="button" text="Home" path="/"></Buttons>
      <Buttons class="button" text="Back to Menu" path="play"></Buttons>
    </div>
  </div>
</template>
<script>
import Buttons from "@/components/Buttons";
export default {
  name: "About",
  components: { Buttons }
};
</script>
<style lang="scss">
.about {
  &__container {
    max-width: 500px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    color: #ffdd33;
    font-family: "Barlow", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .button {
      margin-top: 30px;
      margin-left: 15px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
  &__content {
    min-height: 300px;
    background-color: #000;
    border: 1px solid #ffdd33;
    border-bottom: 5px solid #ffdd33;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px 5px 0 0;
    padding: 20px;
    position: relative;
    z-index: 3;

    p {
      color: #fff;
      line-height: 20px;
      margin: 0 0 10px 0;
      font-weight: normal;

      &:last-child {
        margin: 0;
        display: flex;
        justify-content: center;
        a {
          margin: 0 10px 0 0;
        }
      }

      @media (min-width: 767px) {
        font-size: 18px;
      }

      a {
        text-decoration: none;
        color: #ffdd33;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  &__title {
    color: #ffdd33;
    text-align: center;
    margin: 5px 0 15px 0;
    line-height: 1;
  }
  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .button {
      @media (min-width: 767px) {
        margin-bottom: 0;
        margin-left: 15px;
      }

      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>