class elemento{
    tabla(){
        const numero = 10
        let terminoAnterior = 0
        let terminoActual = 1
        for (let i = 1; i <= numero; i++) {
            console.log(terminoActual)
            let terminoSiguiente = terminoAnterior + terminoActual
            terminoAnterior = terminoActual
            terminoActual = terminoSiguiente
        }
    }

}
let elemento1 =new elemento()
elemento1.tabla()