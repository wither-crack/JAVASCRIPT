class estructura{   
    menor(){
        let numeros = [2, 68, 7, 97, 0, 6, 7, 76, 9, 1]
let numerosMenoresA10 = []
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 10) {
    numerosMenoresA10.push(numeros[i]);
    }
    console.log(numerosMenoresA10);
}



}

}

let estructura1 =  new estructura()
estructura1.menor()

