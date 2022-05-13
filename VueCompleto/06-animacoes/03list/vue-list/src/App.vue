<template>
  <div id="app">
    <button @click="filtroAZ">A - Z</button>
    <button @click="filtroZA">Z - A</button>
    <transition-group tag="ul">
      <li v-for="filme in filmes" :key="filme">{{ filme }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      filmes: [
        "O senhor dos aneis",
        "As cronicas de nárnia",
        "O coração valente",
        "Harry Potter",
      ],
    };
  },
  methods: {
    filtroAZ() {
      this.filmes.sort();
    },
    filtroZA() {
      this.filmes.sort().reverse();
    },
  },
  components: {},
};
</script>

<style>
.v-move {
  transition: transform 0.3s;
}
li {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>
