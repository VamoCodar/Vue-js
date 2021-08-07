

const botaoContador = {
    name: "botaoContador",
    template: `<button @click="total++">Contador {{total}}</button>`,
    data() {
        return {
            total: 0
        }
    }
}
export default botaoContador

// ou
// export default  {
//     name: "botaoContador",
//     template: `<button>Contador</button>`
// }