<template>
  <div class="column">
    <div class="card">
      <header class="card-header is-shadowless px-2 py-3">
        <g-link :to="post.path">
          <p class="card-header-title" v-html="post.title"></p>
        </g-link>
      </header>
      <div v-if="post.cover_image" :class="{'card-image' : post.poster}">
        <figure class="image is-4by3">
          <g-image
            alt="Cover image"
            v-if="post.cover_image"
            class="post-card__image"
            :src="post.cover_image"
            width="250"
            height="250"
            fit="contain"
          />
        </figure>
      </div>
      <div class="card-content">
        <PostMeta class="subtitle is-6" :post="post" />
        <PostTags class="subtitle is-6" :post="post" />
        <div class="content" v-html="post.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags,
  },
  props: ["post"],
};
</script>

<style lang="scss">
</style>
