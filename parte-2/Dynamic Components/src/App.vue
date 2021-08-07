<template>
  <div id="app">
    <button @click="componenteAtivo = 'AulaDescricao'">Descricao</button>
    <button @click="componenteAtivo = 'AulaDownload'">Download</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
    <!-- keep alive mantem o componente vivo e nao destroi -->
  </div>
</template>

<script>
import AulaDescricao from "./components/AulaDescricao.vue";
import AulaDownload from "./components/AulaDownload.vue";

export default {
  name: "App",
  components: {
    AulaDescricao,
    AulaDownload,
  },
  data() {
    return {
      componenteAtivo: "AulaDescricao",
    };
  },
};
</script>

<style></style>
