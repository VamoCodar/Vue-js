<template>
  <div id="app">
    <modal-principal>
      <template v-slot:header="logo">
        {{ logo.logo }}
        <p>essse é slot do header</p>
      </template>

      <template #body>
        atalho v-slot
        <p>slot do body</p>
      </template>

      <template v-slot:default
        ><!-- slot default -->
        <p>Slot default</p>
      </template>

      <template v-slot:slotDinamico="{ propPassada }">
        <p>{{ propPassada.name }}</p>
      </template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue";

export default {
  name: "App",
  components: {
    ModalPrincipal,
  },
};
</script>

<style></style>
