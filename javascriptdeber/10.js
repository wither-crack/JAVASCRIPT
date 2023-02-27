//Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
class estructura{
    usowhile(){
        let numeros = [123, 45, 6789, 0, 12, 34564, 7, 89, 123444, 56]
        let numerosMenoresA5 = []
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i].toString().length < 5) {
                numerosMenoresA5.push(numeros[i])
                
            }
            console.log(numerosMenoresA5)
        }
    }
}

let estructura1 = new estructura()
estructura1.usowhile()