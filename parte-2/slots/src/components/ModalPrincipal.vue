<template>
  <div class="modal-principal">
    <button>Fechar</button>
    <slot name="header" :logo="logo"></slot>
    <h1>Esse é o modal</h1>
    <!-- slot com nome -->
    <slot name="body"></slot>
    <!-- slot padrao -->
    <slot></slot>
    <hr />

    <slot name="slotDinamico" :propPassada="propPassada"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      propPassada: {
        name: "Adriano",
      },
      logo:"tecno",
    };
  },
};
</script>

<style>
.modal-principal {
  background: white;
  border: 1px solid black;
  margin: 30px;
  padding: 30px;
}
</style>
