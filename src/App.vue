<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// Create a Random Stars for Background
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  const xy = getRandomPosition();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  document.body.append(star);
}

function getRandomPosition() {
  const y = window.innerWidth;
  const x = window.innerHeight;
  const randomX = Math.floor(Math.random() * x);
  const randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}
export default {
  name: "App"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Barlow:400,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Ropa+Sans&display=swap");
body,
h1,
h2,
p {
  padding: 0;
  margin: 0;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
body {
  margin: 0;
  background-color: black;
  color: #fff;
  font-family: "Barlow", sans-serif;
}
.star {
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: white;
}

#app {
  padding: 10px;

  @media (min-width: 767px) {
    padding: 0;
  }
}
</style>
