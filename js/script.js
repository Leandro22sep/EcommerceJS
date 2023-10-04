class Producto {
    constructor(nombre,categoria,precio,stock){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio =  precio;
        this.stock = stock;
    }
}

let arrayProductos = [
    new Producto("campera rosa","camperas", 19000, 2),
    new Producto("campera negra","camperas", 22000, 3),
    new Producto("campera blanca","camperas", 19000, 3),
    new Producto("hoodie blanco","hoodies", 15000, 4),
    new Producto("hoodie negro","hoodies", 15000, 5),
    new Producto("hoodie rojo","hoodies", 18000, 3),
    new Producto("remera blanca","remeras", 5000, 7),
    new Producto("remera negra","remeras", 5000, 7),
]
console.log(arrayProductos);