<template>
  <div>
    <p>Aulas</p>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>{{ aula.nome }} | {{ aula.duracao }}</p>
        <button @click="completarAula(aula)">Completar Aulas</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AulasComponent",
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15,
        },
        {
          nome: "JavaScript",
          duracao: 30,
        },
        {
          nome: "UX Design",
          duracao: 20,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["COMPLETAR_AULA"]),
    completarAula(aula) {
      this.COMPLETAR_AULA(aula);
    },
  },
};
</script>

<style>
</style>