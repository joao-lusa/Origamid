import DolaReal from "./DolaReal.js";

export default {
    name:"MercadoApple",
    template: `
        <div>
            <p>Valor de mercado apple: {{apple.marketCap}}</p>
            <dola-real></dola-real>
        </div>
    `,
    data () {
        return {
            apple: {},
        }
    },
    methods: {
        fetchApple(){
            fetch("https://api.origamid.dev/stock/aapl/quote")
            .then(r => r.json())
            .then(r => {
                this.apple = r;
            })
        }
    },
    components: {
        DolaReal
    },
    created(){
        this.fetchApple();
    }
}