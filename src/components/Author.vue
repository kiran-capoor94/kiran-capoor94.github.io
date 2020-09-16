<template>
  <div class="columns is-vcentered">
    <div class="column is-narrow has-text-centered">
      <div class="author">
        <g-image
          alt="Author image"
          class="author__image base_shadow"
          src="~/assets/images/author.jpg"
          width="200"
          height="200"
          blur="5"
        />
      </div>
    </div>
    <div class="column">
      <h1 class="title is-family-monospace ml-3 is-size-3">Kiran Capoor | Full Stack Engineer</h1>
      
      <div class="columns has-text-centered mx-3">
        <div class="column" v-for="tech in techStack" :key="tech.name">
          <b-collapse class="panel" animation="slide" v-model="tech.isOpen" :aria-id="tech.ariaId">
            <div slot="trigger" class="panel-heading" role="button" :aria-controls="tech.ariaId">
              <g-image :src="tech.icon" width="30" height="30" blur="5" />
            </div>
            <div class="panel-block">{{ tech.content }}</div>
          </b-collapse>
        </div>
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
  data() {
    return {
      isOpen: false,
      techStack: [
        {
          name: "python",
          icon: "https://img.icons8.com/color/48/000000/python.png",
          ariaId: "pythonCollapsible",
          isOpen: false,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          name: "django",
          icon: "https://img.icons8.com/color/48/000000/django.png",
          ariaId: "djangoCollapsible",
          isOpen: false,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          name: "javascript",
          icon: "https://img.icons8.com/color/48/000000/javascript.png",
          ariaId: "jsCollapsible",
          isOpen: false,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          name: "vue-js",
          icon: "https://img.icons8.com/color/48/000000/vue-js.png",
          ariaId: "vue-jsCollapsible",
          isOpen: false,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          name: "html-5",
          icon: "https://img.icons8.com/color/48/000000/html-5.png",
          ariaId: "html-5Collapsible",
          isOpen: false,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          name: "sass",
          icon: "https://img.icons8.com/color/48/000000/sass.png",
          ariaId: "sassCollapsible",
          isOpen: false,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    };
  },
  watchers: function onOpen() {},
};
</script>

<style lang="scss">
.author {
  transition: 0.5s all ease-in-out;
  &__image {
    border-radius: 100%;
  }

  &__intro {
    opacity: 0.8;
  }
}
</style>
