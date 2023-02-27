class elemento{
    tabla(){
        const numero = 14
        let contadorDivisores = 0;
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
            contadorDivisores++
            }
        }
        if (contadorDivisores === 2) {
            console.log(numero + " es un número primo")
        } else {
            console.log(numero + " no es un número primo")
        }

    }
}
let elemento1 =new elemento()
elemento1.tabla()