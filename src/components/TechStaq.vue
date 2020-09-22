<template>
  <div class>
    <div class="columns has-text-centered mx-3 my-5 is-multiline">
      <div
        class="column is-6 animate__animated"
        :class="tech.animate__delay"
        v-for="tech in techStack"
        :key="tech.name"
      >
        <div class="panel kc-card" :aria-id="tech.ariaId">
          <div class="panel-heading">
            <g-image :src="tech.icon" width="90" height="90" blur="5" />
          </div>
        </div>
      </div>
    </div>
    <div class="mx-5 my-5 has-text-centered animate__animated animate__fadeInLeftBig">
      <h2 class="title is-size-3">Other Technologies I deal with -</h2>
    </div>
    <div class="columns has-text-centered mx-3 my-5 is-multiline">
      <div
        class="column is-4 animate__animated"
        :class="tech.animate__delay"
        v-for="tech in subStack"
        :key="tech.name"
      >
        <div class="panel kc-card" :aria-id="tech.ariaId">
          <div class="panel-heading">
            <g-image :src="tech.icon" width="90" height="90" blur="5" />
          </div>
        </div>
      </div>
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
          icon: "https://img.icons8.com/color/96/000000/python.png",
          ariaId: "pythonCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          border: "border-colour: #0277BD;",
          animate__delay: "animate__fadeInLeftBig",
        },
        {
          name: "django",
          icon: "https://img.icons8.com/color/96/000000/django.png",
          ariaId: "djangoCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig",
        },
        {
          name: "javascript",
          icon: "https://img.icons8.com/color/96/000000/javascript.png",
          ariaId: "jsCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInLeftBig",
        },
        {
          name: "vue-js",
          icon: "https://img.icons8.com/color/96/000000/vue-js.png",
          ariaId: "vue-jsCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig",
        },
        {
          name: "html-5",
          icon: "https://img.icons8.com/color/96/000000/html-5.png",
          ariaId: "html-5Collapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInLeftBig",
        },
        {
          name: "sass",
          icon: "https://img.icons8.com/color/96/000000/sass.png",
          ariaId: "sassCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig",
        },
      ],
      subStack: [
        {
          name: "css3",
          icon: "https://img.icons8.com/color/96/000000/css3.png",
          ariaId: "css3Collapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig ",
        },
        {
          name: "bootstrap",
          icon: "https://img.icons8.com/color/96/000000/bootstrap.png",
          ariaId: "bootstrapCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig ",
        },
        {
          name: "docker",
          icon: "https://img.icons8.com/color/96/000000/docker.png",
          ariaId: "dockerCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig ",
        },
        {
          name: "amazon-web-services",
          icon:
            "https://img.icons8.com/color/96/000000/amazon-web-services.png",
          ariaId: "awsCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig ",
        },
        {
          name: "microsoft-azure",
          icon: "https://img.icons8.com/color/96/000000/azure.png",
          ariaId: "microsoftAzureCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig ",
        },
        {
          name: "heroku",
          icon: "https://img.icons8.com/color/96/000000/heroku.png",
          ariaId: "herokuCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig ",
        },
        {
          name: "google-cloud-platform",
          icon:
            "https://img.icons8.com/color/96/000000/google-cloud-platform.png",
          ariaId: "gcpCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig ",
        },
        {
          name: "api",
          icon: "https://img.icons8.com/fluent/96/000000/api.png",
          ariaId: "apiCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig ",
        },
        {
          name: "graphql",
          icon: "https://img.icons8.com/color/96/000000/graphql.png",
          ariaId: "graphqlCollapsible",
          isOpen: true,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          animate__delay: "animate__fadeInRightBig ",
        },
      ],
    };
  },
  watchers: function onOpen() {},
};
</script>

<style>
</style>
