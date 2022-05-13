<template>
  <div id="app">
    <transition-group tag="ul">
      <li v-for="(produto, index) in carrinho" :key="produto.nome">
        <p>{{ produto.nome }}</p>
        <p>{{ produto.preco }}</p>
        <button @click="remover(index)">Remover</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      carrinho: [
        {
          nome: "Notebook",
          preco: 2399,
        },
        {
          nome: "Smartphone",
          preco: 1399,
        },
      ],
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
