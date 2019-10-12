<template>
  <div class="newPost">
    <form @submit.prevent="salvar">
      <div class="titulo">
        <label>Título:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Título do post"
          v-model="postLocal.titulo"
        />
      </div>

      <div class="autor">
        <label>Autor:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Autor do post"
          v-model="postLocal.autor"
        />
      </div>
      <div class="conteudo">
        <label>Post:</label>
        <textarea
          id="story"
          class="form-control"
          placeholder="Escreva seu post"
          v-model="postLocal.conteudo"
          cols="300"
        ></textarea>
      </div>

      <div class="botao">
        <button type="submit" class="btn btn-primary">Salvar</button>
        <button class="btn btn-danger" click="navegarHome()">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
import api from "../api";

export default {
  props: {
    post: {
      type: Object,
      default: undefined
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
  methods: {
    async salvar(event) {
      var data = new Date();
      this.postLocal.data =
        ("0" + data.getDate()).slice(-2) +
        "-" +
        ("0" + (data.getMonth() + 1)).slice(-2) +
        "-" +
        data.getFullYear();
      this.$emit("Criar", this.postLocal);

      await api.post(api.defaults.backendUrl + "post", this.postLocal);

      this.navegarHome();
    },

    navegarHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>


<style lang="scss">
.newPost form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 600px;
  background-color: #d9d9d9;
}
label {
  font-weight: bold;
  color: #2c3e50;
}
.autor,
.titulo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-grow: 0.5;
  width: 85%;
}

.conteudo {
  flex-grow: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 85%;

  label {
    flex-grow: 0.1;
  }
  textarea {
    resize: none;
    flex-grow: 0.9;
  }
}
.botao {
  button {
    margin: 8px;
  }
}
</style>