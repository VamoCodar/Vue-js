
import DolarReal from "../components/DolarReal.js";

const MarketCap = {
    name: "MarketCap",
    /*html*/
    template:
        `
     <div>
      <p>Valor de mercado da {{nome}} </p>
      <h5 v-show="valor"> {{valor | valorMod}} </h5>
      <hr>
      <dolar-real></dolar-real>
     </div>
      `
    ,

    data() {
        return {
            nome: "",
            valor: "",
        }
    },


    components: {
        DolarReal,
    },


    filters: {
        valorMod(valor) {
            return valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });
        }
    },


    methods: {
        fetchMarket() {
            fetch("https://api.origamid.dev/stock/aapl/quote")
                .then(r => r.json())
                .then(json => {
                    this.valor = json.marketCap
                    this.nome = json.companyName
                })
        },
    },

    //HOOKS
    created() {
        this.fetchMarket()
    },
}
export default MarketCap
