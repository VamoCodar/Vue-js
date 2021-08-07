
export default  {
    name: "DolarReal",
    /*html*/
    template:
        `
       <div>
       <p>Valor do Euro Em reais</p>
       <h3 v-show="valorReal"> {{valorReal | valor}} </h3>
       </div>
    `,

    data() {
        return {
            valorReal: "",
            valores: {}

        }
    },
    methods: {
        fetchDolarReal() {
            fetch(" http://api.exchangeratesapi.io/v1/latest?access_key=64bb2cd83fe138c4a310340369d77f5f")
                .then(r => r.json())
                .then(json => {
                    this.valorReal = json.rates.BRL
                })
        },
    },
    
    filters: {
        valor(valor) {
            return valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });
        }
    },
    
    created() {
        this.fetchDolarReal()
    },
}

