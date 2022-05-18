<template>
  <div>
    <div v-if="loading">
      <PageLoading></PageLoading>
    </div>
    <transition>
      <div v-if="api">
        <h1>Cursos</h1>
        <p>{{ api }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "CursosView",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>
