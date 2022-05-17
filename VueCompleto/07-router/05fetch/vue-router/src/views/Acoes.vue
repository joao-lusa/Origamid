<template>
  <div>
    <h2>Ações</h2>
    <router-link to="/acoes/aapl">Apple</router-link>
    <router-link to="/acoes/fb">FaceBoock</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AcoesViews",
};
</script>

<style>
</style>