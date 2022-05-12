<!-- 
  Crie 3 componentes:

  1: Componente falando sobre a empresa
  2: Componente com os serviços da empresa
  3: Componente com um formulário de contato

  Crie um menu, que ao clique ele mude os componentes
  acima de forma dinâmica. Não destrua o componente
 -->
<template>
  <div id="app">
    <nav>
      <button @click="componenteAtivo = 'SobreEmpresa'">Sobre a empresa</button>
      |
      <button @click="componenteAtivo = 'ServicosEmpresa'">
        Servicos da empresa
      </button>
      |
      <button @click="componenteAtivo = 'ContatoEmpresa'">
        Entrar em contato
      </button>
      |
    </nav>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import SobreEmpresa from "./components/SobreEmpresa.vue";
import ServicosEmpresa from "./components/ServicosEmpresa.vue";
import ContatoEmpresa from "./components/ContatoEmpresa.vue";

export default {
  name: "App",
  data() {
    return {
      componenteAtivo: "ServicosEmpresa",
    };
  },
  components: {
    SobreEmpresa,
    ServicosEmpresa,
    ContatoEmpresa,
  },
};
</script>

<style>
</style>