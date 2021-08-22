<template>
  <div id="app">
    <h1>Logo</h1>
    <button @click="mostrarRouter">aaa</button>
    <router-link to="/">Home</router-link>
    <router-link to="/cursos">Cursos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    mostrarRouter() {
      console.log(this.$route);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  padding: 20px;
}
.router-link-exact-active {
  color: red;
}
</style>
