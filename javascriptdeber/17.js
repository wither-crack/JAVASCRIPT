class elemento{
    tabla(){
        const factor1 = 7
        const factor2 = 5
        let resultado = 0
        for (let i = 0; i < factor2; i++) {
            resultado = resultado + factor1
        }
        console.log("El resultado de la multiplicación es: " + resultado)

    }

}
let elemento1 =new elemento()
elemento1.tabla()