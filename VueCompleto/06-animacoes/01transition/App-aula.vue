<template>
  <div id="app">
    <button @click="ativo = !ativo">servicos</button>
    <transition appear name="fade" @enter="enter" @leave="leave">
      <h1>Serviço</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ativo: false,
    };
  },
  methods: {
    enter(elemento) {
      console.log(elemento.classList.add("teste"));
    },
    leave() {
      console.log("sumiu");
    },
  },
  components: {},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
