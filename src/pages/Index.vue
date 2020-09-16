<template>
  <Layout :show-logo="false">
    <!-- List posts -->
    <section class="section">
      <Author />
    </section>
  </Layout>
</template>

<script>
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
  },
  metaInfo: {
    title: "Hi! I'm Kiran Capoor",
  },
};
</script>
