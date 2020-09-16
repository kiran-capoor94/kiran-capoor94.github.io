<template>
  <div id="app" class="py-3">
    <header class="header">
      <Navbar />
    </header>

    <main class="main py-3">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
