<template>
  <footer class="has-background-black has-text-white">
    <!-- Main container -->
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="column">
          <span class="footer__copyright"
            >Copyright © {{ new Date().getFullYear() }} | Kiran Capoor</span
          >
        </div>
      </div>

      <!-- Right side -->
      <div class="columns is-mobile">
        <p class="column">
          <b-button
            tag="a"
            type="is-primary is-small"
            class="mx-1"
            href="https://gridsome.org"
            >Gridsome</b-button
          >
        </p>
        <p class="column">
          <b-button
            tag="a"
            type="is-primary is-small"
            class="mx-1"
            href="https://vuejs.org/"
            >VueJS</b-button
          >
        </p>
        <p class="column">
          <b-button
            tag="a"
            type="is-primary is-small"
            class="mx-1"
            href="https://buefy.org/"
            >Buefy</b-button
          >
        </p>
        <p class="column">
          <b-button
            tag="a"
            type="is-primary is-small"
            class="mx-1"
            href="https://bulma.io/"
            >Bulma CSS</b-button
          >
        </p>
        <p class="column">
          <b-button
            tag="a"
            type="is-primary is-small"
            class="mx-1"
            href="https://icons8.com"
            >Icons8</b-button
          >
        </p>
      </div>
    </nav>
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
