<template>
  <div id="app">
    <Particles />
    <header class="header">
      <Navbar />
    </header>
    <transition name="fade" appear>
      <main class="main">
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import Particles from "~/components/Particles.vue";

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    Navbar,
    Footer,
    Particles,
  },
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
