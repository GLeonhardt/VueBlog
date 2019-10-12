<template>
  <div class="divRoot">
    <div class="buscar">
      <input type="text" placeholder="Buscar Post" id="busca" v-model="textoBusca" />
      <button class="btn btn-primary" v-on:click="buscar">Pesquisar</button>
    </div>
    <ul class="listaPost" v-if="posts.length > 0">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </ul>
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
      posts: [],
      textoBusca: ""
    };
  },
  computed: {},
  created() {
    api.get(api.defaults.backendUrl + "post").then(response => {
      this.posts = response.data;
      this.posts.reverse();
      console.log(this.posts);
    });
  },
  methods: {
    buscar: function() {
      console.log("pesquisando");
      if (this.textoBusca.length > 0) {
        this.posts = this.posts.filter(
          x =>
            x.titulo.includes(this.textoBusca) ||
            x.autor.includes(this.textoBusca)
        );
        console.log(this.posts);
      } else {
        console.log("else");
      }
    }
  }
};
</script>

<style lang="scss" >
.divRoot {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #d9d9d9;
}
.buscar {
  // position: absolute;
  right: 16px;
  margin-top: 8px;
}

.listaPost {
  // position: relative;
  padding: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>#d9d9d9