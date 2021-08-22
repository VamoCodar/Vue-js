<template>
  <div>
    <h1>Curso ativo: {{ curso }}</h1>

    <router-link :to="{ name: 'curso', params: { curso: 'javascript' } }"
      >Javascript</router-link
    >
    <router-link to="/cursos/html">html</router-link>
    <router-link to="/cursos/css">css</router-link>

    <transition mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  created() {
    console.log("componente criado");
  },
  //navigationGuard
  // beforeRouteUpdate(to, from, next) {
  //   console.log("ROuter atualizado");
  //   console.log(to, from, next);

  // },
};
</script>

<style>
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