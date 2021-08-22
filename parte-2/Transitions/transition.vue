<template>
  <div>
    <img src="https://br.vuejs.org/images/transition.png" alt="" />
    <button @click="ativo = !ativo">Mostrar</button>

    <transition>
      <h1 v-show="ativo">Serviços</h1>
    </transition>

    <!-- custom class -->
    <!-- 
       <transition
      name="fade"
      enter-class="aparecer"
      enter-active-class="animar"
      leave-active-class="esconder"
    >
      <h1 v-show="ativo">Serviços</h1>
    </transition>
    
    enter-class
    enter-active-class
    enter-to-class (2.1.8+)
    leave-class
    leave-active-class
    leave-to-class (2.1.8+)
     -->

     <!-- animation Hooks -->
     <!-- 
       <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
      >
      </transition>
 
      -->
  </div>
</template>

<script>
// import gsap from "gsap";

export default {
  data() {
    return {
      ativo: false,
    };
  },
  methods: {
    // enter(el) {
    //   gsap.to(el, {
    //     y: 10,
    //   });
    // },
  },
};
</script>

<style>
img {
  width: 500px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
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
