<template>
  <div class="planets__container">
    <div class="planets__content">
      <Loading v-show="isLoading"></Loading>

      <Planet :planets="this.planets"></Planet>
    </div>
    <div class="planets__buttons">
      <button id="randomPlanet" @click="randomPlanet()" class="button">Next</button>
      <Buttons class="button" text="Menu" path="play"></Buttons>
    </div>
  </div>
</template>

<script>
import Buttons from "@/components/Buttons";
import Loading from "@/components/Loading";
import Planet from "@/components/Planet";
import axios from "axios";

export default {
  name: "Planets",
  components: { Loading, Planet, Buttons },
  data() {
    return {
      planets: "",
      isLoading: false
    };
  },
  methods: {
    randomPlanet: function() {
      this.isLoading = true;

      let randomNumber = Math.floor(Math.random() * (61 - 1 + 1)) + 1;

      axios
        .get("https://swapi.co/api/planets/" + randomNumber)
        .then(response => {
          this.planets = response.data;
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);
        });
    }
  },
  created() {
    this.randomPlanet();
  }
};
</script>
<style lang="scss">
.planets {
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
      margin-left: 15px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  &__content {
    min-height: 300px;
    background-color: #000;
    border: 1px solid #ffee00;
    border-bottom: 5px solid #ffee00;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    position: relative;
    z-index: 3;

    p {
      text-align: left;
      letter-spacing: 3px;
      font-size: 18px;
      &:last-child {
        text-align: center;
      }
      span {
        color: #ffffff;
        font-weight: bold;
      }
    }
  }

  &__name {
    text-align: center;
    font-family: "Ropa Sans", sans-serif;
    border-bottom: 1px solid #ffee00;
    text-transform: uppercase;
    padding: 20px 0px;
    letter-spacing: 4px;
  }

  &__buttons {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
