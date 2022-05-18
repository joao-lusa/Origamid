<template>
  <div>
    <div v-if="loading">
      <PageLoading></PageLoading>
    </div>
    <div v-if="api">
      <h1>Home</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import PageLoading from "@/components/PageLoading.vue";

export default {
  name: "HomeView",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
  components: { PageLoading },
};
</script>
