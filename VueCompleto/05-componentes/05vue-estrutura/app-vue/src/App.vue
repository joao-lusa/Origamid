<template>
  <div>
    <div id="app">{{ mensagem }}</div>
    <HeaderPrincipal />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mensagem: "Essa é uma mensagem",
    };
  },
  components: {},
};
</script>

<style>
</style>
