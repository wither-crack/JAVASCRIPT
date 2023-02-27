class block{
    operador(){
        let num1=7,num2=8, suma=0,resta=0,mult=0,div=0,res=0
        let ops="+",opr="-",opm="*",opd="/",opre="%"
        //segun lo que decida se realizara la operacion
        suma=num1+num2
        resta=num1-num2
        mult=num1*num2
        div=num1/num2
        res=num1%num2
        console.log(`la suma es:${suma}`)
        console.log(`la resta es:${resta}`)
        console.log(`la multiplicacion es:${mult}`)
        console.log(`la divic+sion es:${div}`)
        console.log(`el porcentaje es:${res}`)
    }
}
let block1 = new block()
block1.operador()