export default {
    name:"TempoComponent",
    template: `
        <p>temperatura rio de janeiro: {{tempo}}</p>
    `,
    data () {
        return {
            tempo: {},
        }
    },
    methods: {
        fetchTempo(){
            fetch("https://www.metaweather.com/api/location/455825/")
            .then(r => r.json())
            .then(r => {
                this.tempo = r.consolidated_weather[0].max_temp.toFixed(2);
            })
        }
    },
    created(){
        this.fetchTempo();
    }
}