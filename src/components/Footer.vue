<template>
  <footer class="footer">
    <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
    <span class="footer__links">
      Powered by
      <b-button type="is-primary is-small" class="mx-1" href="//gridsome.org" outlined>Gridsome</b-button>
      <b-button type="is-primary is-small" class="mx-1" href="https://bulma.io/" outlined>Bulma CSS</b-button>
      <b-button
        type="is-primary is-light"
        size="is-small"
        class="mx-1"
        href="https://icons8.com"
        outlined
      >Icons8</b-button>
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>