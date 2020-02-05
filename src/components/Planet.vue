<template>
  <div>
    <div>
      <h1 class="planets__name">{{ planets.name }}</h1>
    </div>
    <div class="planets__data">
      <p>
        <span>Population:</span>
        {{ planets.population }}
      </p>

      <p>
        <span>Climate:</span>
        {{ planets.climate }}
      </p>

      <p>
        <span>Terrain:</span>
        {{ planets.terrain }}
      </p>

      <p v-if="planets.films">
        <span>Featured in</span>
        {{ planets.films.length }}
        <span>films</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Planet",
  props: ["planets"]
};
</script>
<style lang="scss" scoped>
.planets {
  &__data {
    margin: 0 50px;
  }
}
</style>
