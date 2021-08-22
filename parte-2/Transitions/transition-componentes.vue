<template>
  <div>
    <button @click="estoque++">Estoque</button>
    <button @click="estoque = 0">deletar estoque</button>

    <transition mode="out-in">
      <p v-if="estoque >= 5" key="estoque">{{ estoque }}Items em estoque</p>
      <p v-else-if="estoque >= 1 && estoque < 5" key="acabando">
        items quase acabando
      </p>
      <p v-else key="semestoq">Produto fora de estoque</p>
    </transition>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      estoque: 0,
    };
  },
  methods: {},
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
/* 


v-enter (adicionada antes do elemento ser inserido)
v-enter-active (adicionada durante a animação)
v-enter-to (adicionada assim que a animação termina)
v-leave (adicionada assim que o elemento começa a sair)
v-leave-active (adicionada enquanto o elemento está saindo)
v-leave-to (adicionada quando o elemento saiu)

São classes adicionadas pelos vue.
O nome inicial (v) depende do atributo name
*/
</style>
