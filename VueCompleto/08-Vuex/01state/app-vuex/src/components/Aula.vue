<template>
  <div>
    <p>
      Aula {{ totalAula }}, esse é o usuario {{ user }}, {{ aulasCompletas }}
    </p>
    <button @click="mostrarConsole">Mostrar no console</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AulaComponente",
  data() {
    return {
      totalAula: 25,
      nome: "João Lucas",
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    },
  },
  methods: {
    mostrarConsole() {
      console.log(this.user);
    },
  },
};
</script>

<style>
</style>