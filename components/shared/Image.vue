<template>
  <div class="image" :class="[shadow ? 'with-shadow' : '']">
    <img :src="url" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    shadow: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="less">
.image {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  height: 0px;
  background: @global-muted-color;
  border-radius: 16px;
  &.with-shadow {
    filter: drop-shadow(4px 4px 0px #212429);
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: 16px;
  }
}
</style>
