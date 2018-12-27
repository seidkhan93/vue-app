<template>
  <h2 :class="getClass()">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  props: {
    'secondary': {
      default: null
    }
  },
  methods: {
    getClass() {
      if (this.secondary === '') {
        return 'title title_color_secondary';
      }

      return 'title title_color_primary'
    }
  }
}
</script>

<style lang="scss">
// variables
$colorTitlePrimary: #ffffff;
$colorTitleSecondary: #000000;

.title {
    font-weight: normal;
    font-size: 26px;
    line-height: 33px;
    font-family: inherit;
    text-transform: capitalize;

    &_color_primary {
      color: $colorTitlePrimary;
    }

    &_color_secondary {
      color: $colorTitleSecondary;
    }
}
</style>
