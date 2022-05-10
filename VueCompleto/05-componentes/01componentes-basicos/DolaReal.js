//api de dola/real estava dando erro de acesso
export default {
    name:"DolarReal",
    template: `<p>{{cotacao.error.info}}</p>`,
    data () {
        return {
            cotacao: {},
        }
    },
    methods: {
        fetchCotacao(){
            fetch("https://api.exchangeratesapi.io/latest?base=USD")
            .then(r => r.json())
            .then(r => {
                this.cotacao = r;
            })
        }
    },
    created(){
        this.fetchCotacao();
    }
}