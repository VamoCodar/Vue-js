import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"

Vue.config.productionTip = false


// ROUTERHOOKS GLOBAIS =====
//before acontece antes da navegação
router.beforeEach((to, from, next) => {
  console.log("from: a partir de", from);
  console.log("to: para", to);
  next()
})
//After acontece depois da navegação
router.afterEach((to, from) => {
  console.log("After a partir de:", from);
  console.log("After para:", to);
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
