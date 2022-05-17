<template>
  <div class="home">
    <h1 @click="navegarCursos">Essa é a home</h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    navegarCursos() {
      setTimeout(() => {
        this.$router.push("cursos");
      }, 1000);
    },
  },
};
</script>
