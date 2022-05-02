

const codigoColor = () =>{
    let caracteresDeColores = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let colorHexa = "#";
    
    for(let i=0;i<caracteresDeColores.length;i++){

        if(i<6){
            let posicionRandon = Math.round(Math.random()*15)
            colorHexa+=caracteresDeColores[posicionRandon];
        }else{
            return colorHexa;

        }    
    }

}



const elemento = document.querySelector("#bloque1")
const body = document.querySelector("body")


const changeColor = ()=>{
   
    color=codigoColor()
    body.style.background=color

}

const whiteColor = ()=>{
   
    body.style.background="white"
}


elemento.onmouseenter = whiteColor;

elemento.onmouseleave = changeColor;

