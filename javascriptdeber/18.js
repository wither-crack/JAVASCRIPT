class elemento{
        ana(){
            const dividendo = 24;
            const divisor = 3;
            let cociente = 0;
            while (dividendo >= divisor) {
                dividendo -= divisor;
                cociente++;
            }
            console.log("El cociente de la división es: " + cociente);
        
    }

}
let elemento1 =new elemento()
elemento1.ana()