class elemento{
    tabla(){
        let numero = 132423
        let cadena = numero.toString()
        let caracteres = cadena.split("")
        let caracteresInvertidos = caracteres.reverse()
        let cadenaInvertida = caracteresInvertidos.join("")
        let numeroInvertido = parseInt(cadenaInvertida)
        console.log("El número invertido es: " + numeroInvertido)

    }

}
let elemento1 =new elemento()
elemento1.tabla()