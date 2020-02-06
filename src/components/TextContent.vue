<template>
  <div class="board__container">
    <div class="board__content">
      <p class="board__title">Episode I</p>
      <p class="board__subtitle">THE CODER'S MENACE</p>
      <br />
      <p>B2W summons your Jedis to go out in search of new warriors to join to your journey beside the light.</p>
      <p>Upon meeting the alleged Padawan, he was challenged to find out if he was worthy of the Force.</p>
      <p>The young Padawan carried out his challenge, but your destiny, as well as the outcome of this story, will be revealed in the future...</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextContent"
};
</script>
<style lang="scss" scoped>
p {
  color: #ffdd33;
}

.board {
  &__container {
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    transform: perspective(300px) rotateX(25deg);
    transform-origin: 50% 100%;
    text-align: justify;
    position: absolute;
    margin-left: -9em;
    font-weight: bold;
    overflow: hidden;
    font-size: 350%;
    height: 50em;
    width: 18em;
    bottom: 0;
    left: 50%;
    @media (max-width: 767px) {
      font-size: 150%;
      height: 35em;
      width: 16em;
      left: 57%;
    }
  }

  &:after {
    position: absolute;
    content: " ";
    bottom: 50%;
    left: 0;
    right: 0;
    top: 0;
  }
  &__content {
    animation: scroll 100s linear 16s;
    position: absolute;
    top: 100%;
  }
  &__title,
  &__subtitle {
    text-align: center;
  }
}

@keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -170%;
  }
}
</style>