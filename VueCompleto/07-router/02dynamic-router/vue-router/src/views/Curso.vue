<template>
  <div class="home">
    <h1>{{ curso }}</h1>
    <router-link :to="{ name: 'descricao' }">Descrição</router-link>
    <router-link :to="{ name: 'aulas' }">Aulas</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CursoView",
  props: ["curso"],
  created() {
    console.log("compoente criado");
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
};
</script>
