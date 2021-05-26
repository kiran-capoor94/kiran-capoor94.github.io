<template>
  <div class="container">
    <b-navbar :fixed-top="true" :centered="true" class="is-black">
      <template slot="start">
        <b-navbar-item tag="router-link" to="/">Home</b-navbar-item>
        <b-navbar-item tag="router-link" to="/about">About Me</b-navbar-item>
        <b-navbar-item tag="router-link" to="/stack">My Stack</b-navbar-item>
        <b-navbar-item tag="router-link" to="/works">My Works</b-navbar-item>
        <b-navbar-item tag="router-link" to="/blogs">Blogs</b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style lang="scss">
.nav-bottom-dark {
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 30%);
}
</style>
