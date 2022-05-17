<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view></router-view>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
body {
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
  color: #234;
}
ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}
a.router-link-active {
  color: #4b8;
}
</style>

