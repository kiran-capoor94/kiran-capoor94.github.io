<template>
  <footer class="footer has-background-black has-text-white">
    <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
    <span class="footer__links">
      Powered by
      <b-button
        tag="g-link"
        type="is-primary is-small"
        class="mx-1"
        href="//gridsome.org"
        outlined
      >Gridsome</b-button>
      <b-button
        tag="g-link"
        type="is-primary is-small"
        class="mx-1"
        href="https://bulma.io/"
        outlined
      >Bulma CSS</b-button>
      <b-button
        tag="g-link"
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

<style lang="scss">
.footer {
  bottom: 0;
  width: 100vw;
  padding: 1rem;
}
</style>
