<template>
  <div class="ad">
    <video v-if="isAdVideo" class="ad__video" autoplay muted>
      <source src="../assets/videos/RickRoll.mp4" type="video/mp4" />
    </video>
    <img v-else class="ad__img" src="../assets/images/mockAd.jpg" alt="your ad here" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['isAdVideo']),
  },
};
</script>

<style lang="scss" scoped>
.ad {
  grid-area: ad;
  position: relative;
  &__img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
  &__video {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
}
</style>
