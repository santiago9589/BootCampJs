const express = require("express")
const listado = require("./controller/index")
const path = require("path")


const app = express();

app.get("/listado",listado.mostrarlistado)
app.use(express.static(path.join(__dirname,"public")))

app.listen(3000, ()=>{
    console.log("corriendo en el puerto 3000")
})

app.set("view engine","ejs") // motor de plantillas, modificar el codigo html para que sean vistas
// se debe descargar el paquete con npm i ejs

app.set("views",path.join(__dirname,"views")) // ajusto la url de mi carpeta views

