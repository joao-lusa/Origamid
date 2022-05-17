<template>
  <div class="home">
    <h1>{{ curso }}</h1>
    <router-link :to="{ name: 'descricao' }">Descrição</router-link>
    <router-link :to="{ name: 'aulas' }">Aulas</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CursoView",
  props: ["curso"],
  methods: {
    puxarDados() {
      console.log("Puxei Api");
    },
  },
  beforeRouteEnter(to, from, next) {
    // sem acesso ao this
    // this.puxarDados
    console.log(this);
    // tem que passar o this no next()
    next((vm) => {
      vm.puxarDados();
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this);
    this.puxarDados();
    next();
  },
  beforeRouteLeave(to, from, next) {
    const confirmar = confirm("Você deseja sair ?");
    console.log("não saia");
    if (confirmar) {
      next();
    }
  },
};
</script>
