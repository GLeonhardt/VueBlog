<template>
  <div class="about">
    <form @submit.prevent="salvar">
      <div class="row">
        <div>
          <div class="form-group">
            <label>Título</label>
            <input
              type="text"
              class="form-control"
              placeholder="Título do post"
              v-model="postLocal.titulo"
            />

            <label>Autor</label>
            <input
              type="text"
              class="form-control"
              placeholder="Autor do post"
              v-model="postLocal.autor"
            />

            <textarea
              id="story"
              class="form-control"
              placeholder="Escreva seu post"
              v-model="postLocal.conteudo"
              rows="5"
              cols="33"
            ></textarea>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Salvar</button>
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
      this.postLocal.data = new Date();
      this.$emit("Criar", this.postLocal);

      console.log(api);
      console.log(this.postLocal);
      await api.post(api.defaults.backendUrl + "post", this.postLocal);
      //navegar home
      // router.push({ path: "/" });
      // this.post = { titulo: "", status: 0 };
    }
  }
};
</script>
