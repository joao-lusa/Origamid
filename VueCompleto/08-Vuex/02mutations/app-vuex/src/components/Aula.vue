<template>
  <div>
    <p>
      Aula {{ totalAulas }}, esse é o usuario {{ user }}, {{ aulasCompletas }}
    </p>
    <button @click="mostrarConsole">Modificar urusario</button>
    <button @click="COMPLETAR_AULA">Completar Aula</button>
    <input type="text" v-model="novoUser" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "AulaComponente",
  data() {
    return {
      totalAulas: 25,
      nome: "João Lucas",
      novoUser: "",
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    },
  },
  methods: {
    ...mapMutations(["CHANGE_USER", "COMPLETAR_AULA"]),
    mostrarConsole() {
      this.CHANGE_USER({
        user: this.novoUser,
        totalAulas: this.totalAulas,
      });
    },
    completar() {
      this.completarAula();
    },
  },
};
</script>

<style>
</style>