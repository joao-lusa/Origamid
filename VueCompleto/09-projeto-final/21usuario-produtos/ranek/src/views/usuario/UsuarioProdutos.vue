<template>
  <section>
    <h2>Adicionar produto</h2>
    <ProdudoAdicionar></ProdudoAdicionar>
    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(produto, index) in usuario_produtos" :key="index">
        <ProdutoItem :produto="produto">
          <p>{{ produto.descricao }}</p>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdudoAdicionar from "@/components/ProdudoAdicionar.vue";
import { mapState, mapActions } from "vuex";
import ProdutoItem from "../../components/ProdutoItem.vue";

export default {
  name: "UsuarioProduto",
  components: {
    ProdudoAdicionar,
    ProdutoItem,
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"]),
  },
  methods: {
    ...mapActions(["getUsuarioProdutos"]),
  },
  watch: {
    login() {
      this.getUsuarioProdutos();
    },
  },
  created() {
    if (this.login) {
      this.getUsuarioProdutos();
    }
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>