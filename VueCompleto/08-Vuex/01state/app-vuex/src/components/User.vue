<template>
  <p>User {{ aulasCompletas }}</p>
</template>

<script>
export default {
  name: "AulaComponente",
  computed: {
    aulasCompletas() {
      return this.$store.state.aulasCompletas;
    },
  },
};
</script>

<style>
</style>