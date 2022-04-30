class Figura{
    
    constructor(color){
        this._color = color
    }


    get _color(){
        console.log("El colo es :"+this._color)
    }

    set  _color(color){
        this._color = color
    }
}