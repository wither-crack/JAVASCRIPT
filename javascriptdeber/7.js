class estructura{
    mult3(){
        let mult=3, c=0,res=0
        for(c=1;c<=21;c++){
            res = c %  mult
            if (res==0){
                console.log(`el numero : ${c} es multiplo de 3`)
            }else{}
        }

    }

}
let estructura1 =new estructura()
estructura1.mult3()