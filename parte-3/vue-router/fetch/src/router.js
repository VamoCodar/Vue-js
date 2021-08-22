import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Cursos from "./views/Cursos.vue"


Vue.use(Router)

export default new Router({
	mode: "history", //usa a api do browser pra voltar no hist
	// base: "app", 
	base: process.env.BASE_URL,

	routes: [
		{
			path: "/", //caminho
			component: Home,
		},
		{
			path: "/cursos",
			component: Cursos,
		}
	]

})