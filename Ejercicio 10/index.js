
const buscarCiudad = (e)=>{
   
    if(e.target.id === "Paris"){
        alert("ciudad encontrada")
    }else{
        alert("error, ciudad equivocada")
    }

}

const elemento = document.querySelectorAll(".ciudades")

elemento.forEach(element => {

    element.oncopy = test
    
});





