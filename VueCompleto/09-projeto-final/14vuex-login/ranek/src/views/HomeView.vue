<template>
  <section class="home">
    <h1>👍Compre ou venda👎</h1>
    <ProdutosBuscar></ProdutosBuscar>
    <ProdutosLista></ProdutosLista>
  </section>
</template>

<script>
import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";
export default {
  name: "HomeView",
  components: {
    ProdutosBuscar,
    ProdutosLista,
  },
};
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>