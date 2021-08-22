<template>
  <div>
    <h1>{{ curso }}</h1>
    <router-link :to="{ name: 'descricao' }">Descricao</router-link>
    <router-link :to="{ name: 'aulas' }">aulas</router-link>
    <transition :key="curso" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  beforeRouteEnter(to, from, next) {
    console.log(this); //nao existe o this ainda
    next((vm) => {
      console.log(vm);
    }); // pode this passar aqui dentro pra ocrrer antes
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(this); //depois de atualizar tem o this
    next();
  },
  //   beforeRouteLeave(to, from, next) {
  //     //ativado quando vai sair da rota
  //     //bom pra formularios para n perder conteudo escrito
  //     const confirmar = confirm("você deseja Mesmo Sair?");
  //     if (confirmar) next();
  //   },
};
</script>

<style>
</style>