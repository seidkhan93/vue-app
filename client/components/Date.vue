<template>
  <span :class="getClass()">
    <slot></slot>
  </span>
</template>

<script>
export default {
  methods: {
    getClass() {
      return 'date';
    }
  }
}
</script>

<style lang="scss">
$colorPrimary: #979797;

.date {
  font-size: 13px;
  display: block;
  line-height: 19px;
  font-family: inherit;
  text-transform: capitalize;
  color: $colorPrimary;

  &:before {
    display: inline-block;
    content: " ";
    height: 4px;
    width: 4px;
    background-color: #E74C3C;
    border-radius: 50%;
    box-shadow: 0px 2px 2px rgba(231, 76, 60, 0.5), 0px 2px 5px rgba(231, 76, 60, 0.3);
    margin-right: 8px;
  }
}


</style>