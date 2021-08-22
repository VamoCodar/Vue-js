<template>
  <div>
    <h1>Home</h1>
    <button @click="componenteAtivo = 'PaginaSobre'">Pagina Sobre</button>
    <button @click="componenteAtivo = 'PaginaServicos'">Pagina Servicos</button>

    <transition mode="out-in">
      <component :is="componenteAtivo"></component>
    </transition>
  </div>
</template>

<script>
import PaginaSobre from "./PaginaSobre.vue";
import PaginaServicos from "./PaginaServicos.vue";

export default {
  components: {
    PaginaSobre,
    PaginaServicos,
  },
  data() {
    return {
      componenteAtivo: "sobre",
    };
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(0, -20px, 0);
}
</style>
