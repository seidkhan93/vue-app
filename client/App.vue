<template>
  <div>
    <div class="main">
      <Navbar />

      <router-view></router-view>
    </div>

    <div class="bg" :class="{ 'is-active': !active, 'is-inactive': active }"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: null
    }
  },
  beforeMount() {
    if (this.$route.fullPath === '/detail') {
      this.active = true;
    } else {
      this.active = false;
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.fullPath === '/detail') {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  }
}
</script>