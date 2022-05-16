<template>
  <div class="home">
    <h1>Curso Ativo: {{ curso }}</h1>
    <router-link :to="{ name: 'curso', params: { curso: 'javascript' } }"
      >JavaScript</router-link
    >
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CursosView",
  props: ["curso"],
  created() {
    console.log("compoente criado");
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
};
</script>
