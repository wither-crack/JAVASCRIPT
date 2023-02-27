class elemento{
    tabla(){
        const numero = 22
        let divisores = []
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
            divisores.push(i)
            }
        }
        console.log("Los divisores de " + numero + " son: " + divisores)

    }

}
let elemento1 =new elemento()
elemento1.tabla()