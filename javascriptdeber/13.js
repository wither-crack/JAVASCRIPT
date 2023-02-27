class estructura{   
    imps(){

        let numeros = [5, 12, 7, 3, 20, 4, 5, 1, 9, 14]
        let sumaPares = 0
        let numerosImpares = []
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 !== 0) {
            numerosImpares.push(numeros[i])    
            } else {
            sumaPares += numeros[i];
            }

        }

        console.log('Números impares:', numerosImpares)
        console.log('Suma de números pares:', sumaPares)
}
}
let estructura1= new estructura()
estructura1.imps()


