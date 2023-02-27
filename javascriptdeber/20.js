class elemento{
    tabla(){
        const base = 3
        const exponente = 4
        let resultado = 1
        for (let i = 1; i <= exponente; i++) {
            resultado = resultado * base
        }
        console.log(base + " elevado a " + exponente + " es: " + resultado)

    }

}
let elemento1 =new elemento()
elemento1.tabla()