<template>
  <div>
    <button @click="ativo = !ativo">Modal</button>

    <transition name="toggle">
      <div v-show="ativo" class="modal">
        <div @click="ativo = !ativo" class="close">X</div>
        <header>Header Modal</header>
        <section>
          <h2>conteudo modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quid
            sentiat, non videtis. Nos autem non solum beatae vitae istam esse
            oblectationem videmus, sed etiam levamentum miseriarum. Non autem
            hoc: igitur ne illud quidem. Octavio fuit, cum illam severitatem in
            eo filio adhibuit, quem in adoptionem D. Duarum enim vitarum nobis
            erunt instituta capienda. Non est enim vitium in oratione solum, sed
            etiam in moribus. Portenta haec esse dicit, neque ea ratione ullo
            modo posse vivi; Duo Reges: constructio interrete.
          </p>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: false,
    };
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
#app,
body {
  height: 100vh;
}
body * {
  font-family: "Roboto" !important;
}
body > div {
  height: 100%;
}

.modal {
  position: fixed;
  inset: 0;
  margin: auto;
  max-width: 400px;
  max-height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.223);
  padding: 15px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.close {
  position: absolute;
  top: -10px;
  font-size: 22px;
  right: -10px;
  background: white;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.223);

  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 140%;
  cursor: pointer;
}

.toggle-enter-active, /* to */
.toggle-leave-active {
  transition: 0.5s;
  transform: scale(1);
  perspective: 1000px;
  opacity: 1;
  transform-origin: bottom center;
}
.toggle-enter, /* set */
.toggle-leave-to {
  transform: scale(0);
  opacity: 0;
}

/* v-enter (adicionada antes do elemento ser inserido)
v-enter-active (adicionada durante a animação)
v-enter-to (adicionada assim que a animação termina)
v-leave (adicionada assim que o elemento começa a sair)
v-leave-active (adicionada enquanto o elemento está saindo)
v-leave-to (adicionada quando o elemento saiu)

São classes adicionadas pelos vue.
O nome inicial (v) depende do atributo name
*/
</style>
