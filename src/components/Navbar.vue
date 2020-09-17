<template>
  <div class="container">
    <b-navbar :fixed-top="true" :centered="true" class="is-dark">
      <template slot="start">
        <b-navbar-item tag="router-link" to="/">Home</b-navbar-item>
        <b-navbar-item tag="router-link" to="/about">About Me</b-navbar-item>
        <b-navbar-item tag="router-link" to="/staq">My Staq</b-navbar-item>
        <b-navbar-item tag="router-link" to="/blogs">Articles</b-navbar-item>
        <b-navbar-item tag="router-link" to="/blogs">Hire Me?</b-navbar-item>
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

