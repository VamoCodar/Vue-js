
const TempoDia = {
    name: "TempoDia",
    /*html*/
    template:
        `
        <div>
        
        <ul>
        <li> <h5>Temperatura</h5> <p v-show="temperaturaMedia">{{temperaturaMedia}}°C</p> </li>
        <li> <h5>Temp MAX:</h5> <p v-show="tempMax">{{tempMax}}°C</p> </li>
        <li> <h5>Temp MIN:</h5> <p v-show="tempMin">{{tempMin}}°C</p> </li>
        </ul>
        
        </div>
    `,

    data() {
        return {
            tempoJson: {},
            tempMax: "",
            tempMin: "",
            temperaturaMedia: "",

        }
    },

    methods: {
        fetchTempo() {
            fetch("https://www.metaweather.com/api/location/455825/")
                .then(r => r.json())
                .then(json => {
                    this.tempoJson = json.consolidated_weather
                    this.tempMax = parseInt(this.tempoJson[0].max_temp)
                    this.tempMin = parseInt(this.tempoJson[0].min_temp)
                    this.temperaturaMedia = parseInt(this.tempoJson[0].the_temp)
                })
        },
    },

    created() {
        this.fetchTempo()
    },

}

export default TempoDia