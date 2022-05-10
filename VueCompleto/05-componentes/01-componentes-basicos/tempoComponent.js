//api de clima estava dando erro com o cors
export default {
    name:"TempoComponent",
    //template: `<p>{{tempo}}</p>`,
    data () {
        return {
            tempo: {},
        }
    },
    methods: {
        fetchTempo(){
            fetch("https://api.exchangeratesapi.io/latest?base=USD")
            .then(r => r.json())
            .then(r => {
                this.tempo = r;
            })
        }
    },
    created(){
        this.fetchTempo();
    }
}