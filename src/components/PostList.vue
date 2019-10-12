<template>
  <ul class="listaPost" v-if="posts.length > 0">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </ul>
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
      this.posts.reverse();
      console.log(this.posts);
    });
  }
};
</script>

<style lang="scss" >
.listaPost {
  padding: 8px;
  height: 100%;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>#d9d9d9