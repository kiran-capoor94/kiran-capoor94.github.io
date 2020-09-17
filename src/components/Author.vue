<template>
  <div class="columns is-vcentered is-desktop">
    <div class="column is-3">
      <div class="author-desktop is-hidden-mobile">
        <g-image
          alt="Author image"
          class="author__image base_shadow animate__animated animate__fadeIn"
          src="~/assets/images/author.jpg"
          width="200"
          height="200"
          blur="5"
        />
      </div>
      <div class="author has-text-centered-mobile is-hidden-desktop">
        <g-image
          alt="Author image"
          class="author__image base_shadow animate__animated animate__fadeIn"
          src="~/assets/images/author.jpg"
          width="200"
          height="200"
          blur="5"
        />
      </div>
    </div>
    <div class="column is-vcentered has-text-centered-mobile">
      <div class="is-family-monospace is-size-1 is-inline-block has-text-centered-mobile">
        <span>
          <h1>Namaste</h1>
        </span>
        <span class="mx-5 py-2 is-vcentered animate__animated animate__bounce animate__delay-1s">
          <g-image src="https://img.icons8.com/color/48/000000/pray.png" />
        </span>
      </div>
      <div class="is-flex">
        <h2 class="is-family-monospace is-size-1">I'm Kiran Capoor | UI/UX Designer, Full Stack Dev</h2>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"],
};
</script>

<style lang="scss">
.author-desktop {
  transition: 0.5s all ease-in-out;
  position: fixed;
  top: 45%;
  &__image {
    border-radius: 100%;
  }

  &__intro {
    opacity: 0.8;
  }
}
.author {
  transition: 0.5s all ease-in-out;
  margin-top: 35px;
  &__image {
    border-radius: 100%;
  }

  &__intro {
    opacity: 0.8;
  }
}
</style>
