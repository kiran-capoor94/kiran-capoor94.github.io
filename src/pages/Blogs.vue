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
                  <h2 class="is-family-monospace is-size-1">My Blogs</h2>
                </div>
              </div>
              <div class="columns">
                <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo: {
    title: "Hi! I'm Kiran Capoor",
  },
};
</script>
