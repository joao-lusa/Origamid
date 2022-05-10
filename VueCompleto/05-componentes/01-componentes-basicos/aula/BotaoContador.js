const BotaoContador = {
    name: "BotaoContador",
    template: `<button @click="total++">Contador: {{total}}</button>`,
    data(){
        return {
            total: 0
        }
    }
}

export default BotaoContador;