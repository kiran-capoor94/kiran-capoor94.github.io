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
                  <h3 class="is-family-monospace is-size-4 my-2">
                    <PostTags :post="$page.post" />
                  </h3>
                </div>
                <hr style="background-color: #000;" />
                <div class="buttons">
                  <ShareNetwork
                    v-for="network in networks"
                    :network="network.network"
                    :key="network.network"
                    :style="{backgroundColor: network.color}"
                    :url="`https://kiran-capoor94@github.io${$page.post.path}`"
                    :title="$page.post.title"
                    :description="$page.post.description"
                    hashtags="vuejs,vite"
                  >
                    <div class="button is-transparent" style="margin:auto;">
                      <span class="mr-3">
                        <i :class="network.icon"></i>
                      </span>
                      <span>{{ network.name }}</span>
                    </div>
                  </ShareNetwork>
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
                  class="content has-text-justified px-5 py-5 mt-3 has-background-white-bis"
                  v-html="$page.post.content"
                />
                <div class="post__footer">

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
  name: "SinglePost",
  data() {
    return {
      networks: [
        {
          network: "email",
          name: "Email",
          icon: "fas fa-lg fa-envelope",
          color: "#333333",
        },
        {
          network: "facebook",
          name: "Facebook",
          icon: "fab fah fa-lg fa-facebook-f",
          color: "#1877f2",
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: "fab fah fa-lg fa-linkedin",
          color: "#007bb5",
        },
        {
          network: "pinterest",
          name: "Pinterest",
          icon: "fab fah fa-lg fa-pinterest",
          color: "#bd081c",
        },
        {
          network: "quora",
          name: "Quora",
          icon: "fab fah fa-lg fa-quora",
          color: "#a82400",
        },
        {
          network: "reddit",
          name: "Reddit",
          icon: "fab fah fa-lg fa-reddit-alien",
          color: "#ff4500",
        },
        {
          network: "sms",
          name: "SMS",
          icon: "far fah fa-lg fa-comment-dots",
          color: "#333333",
        },
        {
          network: "telegram",
          name: "Telegram",
          icon: "fab fah fa-lg fa-telegram-plane",
          color: "#0088cc",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "fab fah fa-lg fa-whatsapp",
          color: "#25d366",
        },
      ],
    };
  },
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
