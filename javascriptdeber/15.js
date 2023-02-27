class estructura{   
    cos(){
        let costo = 25
        let pago = 50
        let vuelto = pago - costo;
        if (vuelto < 0) {
            console.log('Pago insuficiente')
        } else {
            console.log('Vuelto:', vuelto)
        }

}
}
let estructura1= new estructura()
estructura1.cos()