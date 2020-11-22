import Inventario from "./clases/inventario.js";
import Producto from "./clases/producto.js"

var btnAgregarProducto = document.querySelector ("#btnAgregarProducto")
var btnBuscarProducto = document.querySelector ("#btnBuscarProducto")
var btnEliminarProducto = document.querySelector ("#btnEliminarProducto")
var btnEliminarPrimero = document.querySelector ("#btnEliminarPrimero")
var btnListar = document.querySelector ("#btnListar")
var btnInverso =document.querySelector ("#btnInverso")

var producto
var inventario = new Inventario();

btnAgregarProducto.addEventListener("click",()=>{
    let codigo = document.getElementById("CodiP").value;
    let nombre = document.getElementById("Producto").value;
    let descripcion = document.getElementById("DProducto").value;
    let cantidad = document.getElementById("CantidadP").value;
    let precio = document.getElementById("PrecioP")
    var lugar =document.getElementById("Lugar").value;

    if(codigo != "" && nombre != "" && descripcion != "" && cantidad !="" && precio != "" ){
        console.clear();
        if(inventario.inicio == null){
            console.log("el inventario esta vacio")
        }else{
            producto = new Producto(codigo,nombre,descripcion,cantidad,precio)
        }
    }

})