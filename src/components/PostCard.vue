<template>
  <div class="column">
    <div class="card">
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
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4" v-html="post.title"></p>
            <PostMeta class="subtitle is-6" :post="post" />
            <PostTags class="subtitle is-6" :post="post" />
          </div>
        </div>

        <div class="content" v-html="post.description"></div>
        <p class="card-footer-item">
          <span>
            <g-link :to="post.path">Link</g-link>
          </span>
        </p>
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
