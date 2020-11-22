import Producto from "./producto.js"
export default class Inventario {

    constructor(){
        this.inicio = null;
    }
    agregarProducto(Producto,ProductoNuevo){
        if(this.inicio == null){
            this.inicio =Producto;
        }else{
            let aux = this.inicio;
            while(aux.siguiente != null){
                aux. aux.siguiente;
            }
            aux.siguiente = productoNuevo;
            aux.siguinete.anterior = aux;
        }
    }
    EliminarProducto(producto){
        let aux = this.inicio;
        if(this.inicio != null){
            if(this.inicio.codigo == producto.codigo){
                this.inicio = this.inicio.siguinte;
                if(this.inicio != null){
                    this.inicio.anterior = null
                }
                return new Producto (aux.codigo,aux.descripcion,aux.precio,aux.siguiente,aux.anterior)
            }else{
                while(aux.siguiente.codigo != producto.codigo){
                    aux = aux.siguiente
                }
                if(aux.siguiente.codigo == producto.codigo){
                    var F = new Producto(aux.codigo,aux.descripcion,aux.precio,aux.siguiente,aux.anterior)
                }
                aux.siguiente = aux.siguiente.siguiente;
                aux.siguiente.anterior = aux;
            }
            return F;
        }
    }

    buscarProducto(producto){
        let aux = this.inicio
        if(aux){
            try{
                while(aux.codigo != producto.codigo){
                    aux = aux.siguiente;
                }
                if(aux.codigo == producto.codigo){
                    return aux;
                }
            } catch(error){}
        }
    }

    listarProducto(interfaz){
        let aux = this.inicio;
        interfaz.mostrarLista(aux)
    }
    listarInverso(interfaz){
        let aux = this.inicio;
        interfaz.MListaInversa(aux)
    }

    InsertarProducto(producto,lugar){
        let aux = this.inicio;
        if(lugar == 1){
            this.inicio =  producto;
            producto.siguiente = aux;
        }else{
            let i = 2;
            while (i != lugar){
                if(aux.siguiente != null){
                    aux = aux.siguiente;
                    i++;
                }else{
                    break;
                }
            }if(i == lugar){
                producto.siguiente = aux.siguiente;
                aux.siguiente = producto;
            }
        }
    }

    agregregarInicio(producto){
        if(this.inicio === null){
            this.inicio = producto;
        }else{
            let aux = this.inicio;
            this.inicio = producto;
            this.inicio.siguiente = aux;
        }
    }

    EliminanrPrimero(){
        if(this.inicio != null){
            let producto = new Producto(aux.codigo,aux.descripcion,aux.precio,aux.siguiente,aux.anterior)
            this.inicio = this.inicio.siguiente;
            try{
                this.inicio.anterior = null
            }catch(error){
                return producto;
            }
        }
    }
}