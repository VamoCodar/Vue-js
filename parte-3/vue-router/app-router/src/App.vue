<template>
  <div id="app">
    <h1>Logo</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cursos">Cursos</router-link>
      <router-link to="/acoes">Ações</router-link>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  color: #2c3e50;
  border: 4px solid #2c3e50;
  margin: 20px;
  padding: 20px;
}
a {
  padding: 20px 0;
  color: #2c3e50;
}
a + a {
  margin-left: 30px;
}
nav {
  padding: 20px 0;
}
.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
</style>
