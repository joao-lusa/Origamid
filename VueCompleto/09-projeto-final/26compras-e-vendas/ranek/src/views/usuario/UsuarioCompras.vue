<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div
        class="produtos-wrapper"
        v-for="(compra, index) in compras"
        :key="index"
      >
        <ProdutoItem v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor">
            <span>Vendedor: </span>
            {{ compra.vendedor_id }}
          </p>
        </ProdutoItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "@/components/ProdutoItem.vue";
import { api } from "@/services";
import { mapState } from "vuex";

export default {
  nome: "UsuarioCompras",
  data() {
    return {
      compras: null,
    };
  },
  components: { ProdutoItem },
  computed: {
    ...mapState(["usuario", "login"]),
  },
  methods: {
    getcompras() {
      api.get(`transacao?comprador_id=${this.usuario.id}`).then((response) => {
        this.compras = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getcompras();
    },
  },
  created() {
    if (this.login) {
      this.getcompras();
    }
  },
};
</script>

<style scoped>
.produto-wrapper {
  margin-bottom: 40px;
}
.vendedor span {
  color: #e80;
}
h2 {
  margin-bottom: 20px;
}
</style>