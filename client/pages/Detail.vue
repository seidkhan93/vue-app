<template>
  <transition name="slide">
    <Article />
  </transition>
</template>

<script>
export default {
  name: 'Detail'
}
</script>

<style lang="scss">
.slide {
    &-enter-active,
    &-leave-active {
      transition: .5s ease;
    }

    &-enter,
    &-leave-to {
        transform: translateX(100%);
    }

    &-enter-to,
    &-leave {
        transform: translateX(0);
    }
}
</style>