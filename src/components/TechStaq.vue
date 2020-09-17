<template>
  <div class="columns has-text-centered mx-3 is-multiline">
    <div
      class="column is-6 animate__animated"
      :class="tech.animate__delay"
      v-for="tech in techStack"
      :key="tech.name"
    >
      <b-collapse
        class="panel kc-panel"
        animation="slide"
        v-model="tech.isOpen"
        :aria-id="tech.ariaId"
      >
        <div slot="trigger" class="panel-heading" role="button" :aria-controls="tech.ariaId">
          <g-image :src="tech.icon" width="90" height="90" blur="5" />
        </div>
        <div class="panel-block">{{ tech.content }}</div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechStaq",
  data() {
    return {
      techStack: [
        {
          name: "python",
          icon: "https://img.icons8.com/color/48/000000/python.png",
          ariaId: "pythonCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          border: "border-colour: #0277BD;",
          animate__delay: "animate__fadeInLeftBig animate__delay",
        },
        {
          name: "django",
          icon: "https://img.icons8.com/color/48/000000/django.png",
          ariaId: "djangoCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig animate__delay-1s",
        },
        {
          name: "javascript",
          icon: "https://img.icons8.com/color/48/000000/javascript.png",
          ariaId: "jsCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInLeftBig animate__delay-2s",
        },
        {
          name: "vue-js",
          icon: "https://img.icons8.com/color/48/000000/vue-js.png",
          ariaId: "vue-jsCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig animate__delay-2s",
        },
        {
          name: "html-5",
          icon: "https://img.icons8.com/color/48/000000/html-5.png",
          ariaId: "html-5Collapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInLeftBig animate__delay-3s",
        },
        {
          name: "sass",
          icon: "https://img.icons8.com/color/48/000000/sass.png",
          ariaId: "sassCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig animate__delay-4s",
        },
      ],
    };
  },
  watchers: function onOpen() {},
};
</script>

<style>
</style>
