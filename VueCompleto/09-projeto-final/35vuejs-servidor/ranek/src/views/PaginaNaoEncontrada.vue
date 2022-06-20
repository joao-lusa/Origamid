<template>
  <div>
    <h1>Pagina não encontrada.</h1>
    <router-link to="/">Voltar Para Home</router-link>
    <img src="https://http.cat/404" alt="gato" />
  </div>
</template>

<script>
export default {
  name: "paginaNaoEncontrada",
};
</script>

<style scoped>
div {
  margin: 20px auto;
  text-align: center;
}
img {
  margin-left: 20%;
}
@media screen and (max-width: 500px) {
  img {
    margin: 0;
  }
}
</style>