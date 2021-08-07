<template>

  <div id="app">

    <nav>
      <button @click="componenteAtivo = 'SectionSobre'">Sobre</button>
      <button @click="componenteAtivo = 'SectionServicos'">Servicos</button>
      <button @click="componenteAtivo = 'FormularioContato'">Contato</button>
    </nav>

    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>

  </div>

</template>

<script>

import SectionSobre from "./components/SectionSobre";
import SectionServicos from "./components/SectionServicos";
import FormularioContato from "./components/FormularioContato";

export default {
  name: "App",

  components: {
    SectionSobre,
    SectionServicos,
    FormularioContato,
  },

  data() {
    return {
      componenteAtivo: "SectionSobre",
    };
  },
};
</script>

<style>
nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>

<!-- 
  Crie 3 componentes:

  1: Componente falando sobre a empresa
  2: Componente com os serviços da empresa
  3: Componente com um formulário de contato

  Crie um menu, que ao clique ele mude os componentes
  acima de forma dinâmica. Não destrua o componente
 -->
