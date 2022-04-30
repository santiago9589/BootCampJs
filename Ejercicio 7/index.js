class Figura{
    #color = "verde"

    get color(){
        console.log("El colo es : "+this.#color)
    
    }

    set  color(color){
        this.#color = color
    }
}

class Circulo extends Figura{

    constructor(radio,color){
        super()
        this.radio=radio;
        this.color=color
    }

    


}

class Rectángulo extends Figura{
    constructor(base,altura,color){
        super()
        this.base=base;
        this.altura=altura;
        this.color=color
    }

}



