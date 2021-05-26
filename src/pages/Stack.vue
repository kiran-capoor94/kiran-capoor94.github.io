<template>
  <Layout :show-logo="false">
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <section class="section">
            <div class="container">
              <div class="columns is-vcentered is-desktop">
                <div class="column is-vcentered has-text-centered">
                  <div class="is-family-monospace is-size-1 is-inline-block has-text-centered">
                    <span>
                      <h1>Namaste</h1>
                    </span>
                    <span
                      class="mx-5 py-2 is-vcentered animate__animated animate__bounce animate__delay-1s"
                    >
                      <g-image src="https://img.icons8.com/color/48/000000/pray.png" />
                    </span>
                  </div>
                  <h2 class="is-family-monospace is-size-1">My Stack</h2>
                </div>
              </div>
              <TechStaq />
            </div>
          </section>
        </div>
      </div>
    </section>
  </Layout>
</template>


<script>
import TechStaq from "~/components/TechStaq.vue";
export default {
  name: "Stack",
  components: {
    TechStaq,
  },
};
</script>

<style>
</style>
