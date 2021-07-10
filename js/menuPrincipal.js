import BotaoContador from "./botaoContador.js"

export default {
    name: "menuPrincipal",
    template:
        `<ul>
        <li>Name</li>
        <li>Contato</li>
        <li>Comprar</li>
        <botao-contador></botao-contador>
    </ul> `,
    components: {
        BotaoContador
    }
}