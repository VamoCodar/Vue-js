<template>
  <div>
    <p>Teste</p>
    <button @click="ativo = !ativo">Mostrar</button>



    <transition @enter="enter">
      <h1 v-show="ativo">Serviços</h1>
    </transition>

  </div>
</template>

<script>
import gsap from "gsap";
console.log(gsap);
export default {
  data() {
    return {
      ativo: false,
    };
  },
  methods: {
    enter(el) {
      gsap.to(el, {
        y: 10,
      });
    },
  },
};
</script>

<style>
/* .v-enter-active,
.v-leave-active{
	transition: opacity 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
} */
</style>
