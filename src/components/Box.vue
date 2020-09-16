<template>
  <span class="box">
    <b-tooltip
      type="is-dark"
      position="is-bottom"
      multilined
      :triggers="['click']"
      :auto-close="['outside', 'escape']"
    >
      <template v-slot:content>
        <div>
          <p class>{{ content }}</p>
        </div>
      </template>
      <g-image
        src="https://img.icons8.com/color/48/000000/python.png"
        width="30"
        height="30"
        blur="5"
      />
    </b-tooltip>
  </span>
</template>

<script>
export default {};
</script>

<style>
</style>