

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

const elemento = document.querySelector(".bloque1")


const changeColor = ()=>{
   
    color=codigoColor()
    elemento.style.background=color

}

const formaCircular = (e) =>{

    if(e.target.classList.value === "bloque1"){
        elemento.classList.remove("bloque1")
        elemento.classList.add("circulo")
    }else{
        elemento.classList.remove("circulo")
        elemento.classList.add("bloque1")
    }   
     
}







elemento.ondblclick = formaCircular;
elemento.onclick = changeColor;

