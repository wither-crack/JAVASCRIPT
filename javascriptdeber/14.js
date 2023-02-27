class estructura{   
    pri(){
        let arreglo = ['8', '7', '4', '9', '12']
        let indiceMedio = Math.floor(arreglo.length / 2)
        console.log('Primer valor:', arreglo[0]);
        console.log('Valor medio:', arreglo[indiceMedio])
        console.log('Último valor:', arreglo[arreglo.length - 1])

}
}
let estructura1= new estructura()
estructura1.pri()
