import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Cursos from "./views/Cursos.vue"
import Curso from "./components/Curso.vue"
import CursoAulas from "./components/CursoAulas.vue"
import CursoDescricao from "./components/CursoDescricao.vue"
import Acoes from "./views/Acoes.vue"
import AcoesDados from "./components/AcoesDados.vue"


Vue.use(Router)

export default new Router({
	mode: "history", //usa a api do browser pra voltar no hist
	// base: "app", 
	base: process.env.BASE_URL,

	routes: [
		//tod que estao na raiz aparecem no router view
		//dentro de app.vue
		// os filhos precisam de um router view no seu pai
		{
			path: "/", //caminho
			component: Home,
		},
		{
			path: "/acoes", //caminho
			component: Acoes,
			children: [
				{
					path: ":simbolo",
					component: AcoesDados,
					props: true
				}
			]
		},

		{
			path: "/cursos/",
			component: Cursos,
			props: true,

			beforeEnter: (to, from, next) => { //ROUTER HOOKS LOCAIS 
				console.log("Foi para cursos");
				next()
			},
			children: [
				{
					name: "curso",
					path: ":curso",
					component: Curso,
					children: [
						{
							name: "aulas",
							path: "aulas",
							component: CursoAulas,
						},
						{
							name: "descricao",
							path: "descricao",
							component: CursoDescricao,
						}
					],
				}
			],
		}
	]

})