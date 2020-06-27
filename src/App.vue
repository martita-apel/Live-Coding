<template>
  <div id="app">
    <Navbar id="navbar" />
    <router-view />
    <footer class="page-footer font-small blue">
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright: <b>Live Coding</b>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page-footer {
  background-color: black;
  color: white;
}
</style>
