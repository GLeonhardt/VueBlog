<template>
  <div class="root">
    <div class="tituloBotaoExcluir">
      <div class="titulo">
        <span class="spanTitulo">{{post.titulo}}</span>
        <small class="spanAutorData">
          Escrito por:
          {{post.autor}}
          em: {{post.data}}
        </small>
      </div>
      <div class="botao">
        <button class="btn btn-outline-danger" @click="$emit('excluir', post)">Excluir</button>
      </div>
    </div>

    <div class="conteudo">
      <p>{{post.conteudo}}</p>
    </div>
  </div>
</template>

<script>
import api from "../api";

export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {},
  data() {
    return {
      postLocal: Object.assign(
        {},
        { titulo: "", data: "", autor: "", conteudo: "" },
        this.post
      )
    };
  },
  watch: {
    post(postNovo, postAntigo) {
      this.postLocal = Object.assign({}, this.postLocal);
    }
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss">
.root {
  background-color: #e5e5e5;
  width: 85%;
  margin-bottom: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .tituloBotaoExcluir {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .titulo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-grow: 0.8;
    width: 85%;
  }

  .spanTitulo {
    font-weight: bold;
    font-size: 24px;
    color: #2c3e50;
  }

  .conteudo {
    flex-grow: 6;
    margin-top: 12px;
    p {
      font-size: 16px;
      color: #2c3e50;
      font-family: cursive;
    }
  }
}
</style>