<template>
  <div>
    <transition-group tag="ul">
      <li v-for="(item, index) in carrinho" :key="item.nome">
        <p>{{ item.nome }}</p>
        <p>{{ item.preco }}</p>
        <button @click="remover(index)">remover</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrinho: [
        {
          nome: "Notebook",
          preco: 2399,
        },
        {
          nome: "Smartphone",
          preco: 1399,
        },
      ],
    };
  },
  methods: {
    remover(index) {
      this.carrinho.splice(index, 1);
    },
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
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
