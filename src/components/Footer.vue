<template>
  <footer class="footer has-background-black has-text-white">
    <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }} | Kiran Capoor</span>
    <p class="footer__links">
      <b-button tag="a" type="is-primary" class="mx-1 is-link" href="https://gridsome.org">Gridsome</b-button>
      <b-button tag="a" type="is-primary" class="mx-1" href="https://vuejs.org/">VueJS</b-button>
      <b-button tag="a" type="is-primary" class="mx-1" href="https://buefy.org/">Buefy</b-button>
      <b-button tag="a" type="is-primary" class="mx-1" href="https://bulma.io/">Bulma CSS</b-button>
      <b-button tag="a" type="is-primary" class="mx-1" href="https://icons8.com">Icons8</b-button>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  width: 100vw;
  padding: 1rem;

  &__copyright {
    margin: auto;
    padding: 1rem;
  }

  &__links {
    display: flex;
    margin: auto;
    padding: 1rem;
  }
}
</style>
