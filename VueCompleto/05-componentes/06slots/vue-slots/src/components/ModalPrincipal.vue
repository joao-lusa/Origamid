<template>
  <div class="modal">
    <slot name="header" :logo="logo"></slot>
    <h1>{{ user.nome }}</h1>
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      logo: "techno",
      user: {
        nome: "Andre",
      },
    };
  },
};
</script>

<style>
</style>