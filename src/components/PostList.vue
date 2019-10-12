<template>
  <div class="listaPost">
    <span>a</span>
    <ul v-if="posts.length > 0">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </ul>
    <span v-else>Nenhum post encontrado</span>
  </div>
</template>

<script>
import api from "../api";
import Post from "./Post";

export default {
  name: "PostList",
  components: {
    Post
  },
  data() {
    return {
      posts: []
    };
  },
  computed: {},
  created() {
    api.get(api.defaults.backendUrl + "post").then(response => {
      this.posts = response.data;
      console.log(this.posts);
    });
  }
};
</script>

<style lang="scss" >
.listaPost {
  height: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>