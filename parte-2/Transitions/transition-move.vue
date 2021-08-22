<template>
  <div>
    <button @click="filtroAz">Filtro A - Z</button>
    <button @click="filtroZa">Filtro Z - A</button>
    <transition-group tag="ul">
      <li v-for="filme in filmes" :key="filme">
        <p>{{ filme }}</p>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: ["mascara", "Era do Gelo", "Narnia", "Vida de cao"],
    };
  },
  methods: {
    filtroAz() {
      this.filmes.sort();
    },
    filtroZa() {
      this.filmes.sort().reverse();
    },
  },
};
</script>

<style>
.v-move {
  transition: transform .4s;
}

li {
  padding: 10px 40px;
  margin: 5px;
  width: 200px;
  background: white;
  font-family: Roboto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
