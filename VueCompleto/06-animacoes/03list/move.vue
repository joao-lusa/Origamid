<template>
  <div id="app">
    <transition-group tag="ul">
      <li v-for="filme in filmes" :key="filme.nome">
        {{filme}}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      filmes: ["o senhor dos aneis", "As cronicas de nárnia", "O coração valente",
       "Harry Potter"],
    };
  },
  methods: {
    remover(index) {
      this.carrinho.splice(index, 1);
    },
  },
  components: {},
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(-20px, 0, 0);
}
</style>
