<template>
  <div class="home">
    <h1>Curso Ativo: {{ curso }}</h1>
    <router-link :to="{ name: 'curso', params: { curso: 'javascript' } }"
      >JavaScript</router-link
    >
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>
    <transition mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CursosView",
  props: ["curso"],
  created() {},
};
</script>

<style>
.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>