<template>
  <ModalPrincipal>
    <template #header="{ logo }">
      {{ logo }}
      Esse é o header
    </template>
    <template v-slot:default="{ user }">
      {{ user.nome }}
      <p>este é um teste</p>
      <button>botão</button>
    </template>
    <template #footer> <p>esse é o footer</p> </template>
  </ModalPrincipal>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue";
export default {
  name: "App",
  components: {
    ModalPrincipal,
  },
};
</script>

<style>
</style>
