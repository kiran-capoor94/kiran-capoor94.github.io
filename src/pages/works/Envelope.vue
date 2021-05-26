<template>
  <Layout :show-logo="false">
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <section class="section">
            <div class="container">
              <div class="columns is-vcentered is-desktop">
                <div class="column is-vcentered has-text-centered">
                  <div
                    class="is-family-monospace is-size-1 is-inline-block has-text-centered"
                  >
                    <span
                      class="mx-5 py-2 is-vcentered animate__animated animate__bounce animate__delay-1s"
                    >
                      <g-image
                        src="https://img.icons8.com/color/96/000000/pray.png"
                      />
                    </span>
                    <span>
                      <h1>Envelope - Email Marketing Tool</h1>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr style="background-color: #000" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  name: "Envelope",
  components: {},
  metaInfo: {
    title: "Envelope - Email Marketing Tool",
  },
};
</script>

<style>
</style>
