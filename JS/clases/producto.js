export default class Producto {
    constructor(codigo,nombre,descripcion,cantidad,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
        this.siguiente = null;
        this.anterior = null;
    }
}