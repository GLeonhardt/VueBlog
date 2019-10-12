<template>
  <div class="titulo">
    <!-- <span>{{post.titulo}}</span> -->
    <span>post</span>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {}
};
</script>