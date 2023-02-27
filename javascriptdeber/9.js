class estructura{
    nombreiguales(){
        let nom="johnny",nom1="andres"
        if(nom==nom1){
            console.log(`los nombres son iguales`)
        }else{
                console.log(`los nombres no son iguales`)  
        }

    }
}
//let estructura1 =new estructura()
//estructura1.nombreiguales()
class estructura1{
    nombreiguales(){
        let nom="johnny",nom1="johnny"
        if(nom==nom1){
            console.log(`los nombres son iguales`)
        }else{
                console.log(`los nombres no son iguales`)  
        }

    }
}
let estructura2 =new estructura1()
estructura2.nombreiguales()