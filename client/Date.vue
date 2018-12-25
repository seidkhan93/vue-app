<template>
  <h3 :class="getClass()">
    <slot></slot>
  </h3>
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
      return 'date'
    }
  }
}
</script>

<style lang="scss">
// variables
$colorPrimary: #979797;

.date {
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    font-family: inherit;
    text-transform: capitalize;
    color: $colorPrimary;
}
</style>
