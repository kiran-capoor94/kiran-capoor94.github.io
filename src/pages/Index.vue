<template>
  <Layout :show-logo="false">
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <Author />
        </div>
      </div>
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
