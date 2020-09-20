<template>
  <Layout>
    <section>
      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <div class="columns pt-3">
              <div class="column is-vcentered has-text-centered-mobile">
                <div class="is-flex has-background-black">
                  <h2
                    class="is-family-monospace is-size-1 has-text-white"
                    style="margin: auto auto auto 0px;"
                  >{{ $page.post.title }}</h2>
                </div>
                <hr style="background-color: #000;" />
                <div>
                  <h3 class="is-family-monospace is-size-4">
                    <PostMeta :post="$page.post" />
                  </h3>
                </div>
                <hr style="background-color: #000;" />
                <div>
                  <ShareNetwork
                    network="facebook"
                    url="https://news.vuejs.org/issues/180"
                    :title="$page.post.title"
                    :description=""
                    :hashtags=""
                  >Share on Facebook</ShareNetwork>
                </div>
                <hr style="background-color: #000;" />
              </div>
            </div>
            <div class="columns">
              <div class="column"></div>
              <div class="post content-box">
                <div class="post__header has-text-centered">
                  <g-image
                    alt="Cover image"
                    v-if="$page.post.cover_image"
                    :src="$page.post.cover_image"
                  />
                </div>
                <div
                  class="subtitle has-text-justified px-5 pb-5 pt-3 has-background-white-bis"
                  v-html="$page.post.content"
                />
                <div class="post__footer">
                  <PostTags :post="$page.post" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
</style>
