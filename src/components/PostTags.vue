<template>
  <div class="tags">
    <g-link class="tag" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      <span>#</span>
      {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
