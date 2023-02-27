class elemento{
    tabla(){
        const numero = 5
        let resultado = 1
        for (let i = 1; i <= numero; i++) {
            resultado = resultado * i
        }
        console.log("El factorial de " + numero + " es: " + resultado)


    }

}


let elemento1 =new elemento()
elemento1.tabla()