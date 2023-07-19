// Consigna
/* 
🔶 Recupera el array que utilizado en el desafío de Storage. 
🔶 Recorrerlo e incorpóralo en el documento HTML, mostrando la información de cada uno de los productos en pantalla.
🔶 Utiliza una plantilla HTML para listar cada producto del array. La plantilla de HTML debe estar compuesta por un <div>, que contenga el resto de los elementos, un tag <h2> para mostrar el título del producto, y un tag <p> donde figura el importe del mismo.
🔶 Crea una función para recuperar el array desde Storage (o puedes generar previamente el mismo como un array de objetos). 
🔶 Luego, utiliza el método forEach() para iterar el array, y escribir dentro del tag <body>, una plantilla HTML con la información de cada producto. 
*/
// Tips
/* 
🔹 Recuerda declarar tu archivo .JS en el apartado <head> del documento HTML, y de agregar el atributo defer para que el archivo .JS se cargue luego de cargado el documento HTML.
🔹 Ten presente el uso de plantillas HTML y plantillas literales para armar el HTML.
🔹 Llama a la función JS que contiene todo este código, para que se cargue automáticamente cuando el documento HTML sea cargado.
*/

// === Micro 5 ===
class Producto{
    constructor(producto, precioUnitario){
        this.producto = producto;
        this.precioUnitario = precioUnitario;
    }
}
class prodCarrito{
    constructor(producto, precioUnitario, cantidad){
        this.producto = producto;
        this.precioUnitario = precioUnitario;
        this.cantidad = cantidad;
    }
}

const productos = [
    {producto: "Macbook Air M2", precioUnitario: 159900},
    {producto: "Magic Mouse", precioUnitario: 39900},
    {producto: "iPad Air", precioUnitario: 89790}
]

const carrito = {
    contenido: JSON.parse(localStorage.getItem("carrito")) || [],
    totalDeCompra: function (){
        let total = 0
        for(let i = 0; i<this.contenido.length; i++){
            let precioProducto = this.contenido[i].precioUnitario * this.contenido[i].cantidad
            total += precioProducto
        }
        return total
    }
}

const agregarProductoCarrito = ()=>{
    let codigoProducto = parseInt(prompt("Ingrese el código del producto a comprar \r 0 - Macbook Air M2 \r 1 - Magic Mouse \r 2 - iPad Air"))
    // 0 <= CODIGO PRODUCTO <=2
    while(!((!isNaN(codigoProducto)) && codigoProducto>=0 &&codigoProducto<=2 )){
        codigoProducto = parseInt(prompt("Ingrese el código del producto a comprar \r 0 - Macbook Air M2 \r 1 - Magic Mouse \r 2 - iPad Air"))
    }
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"))
    while(!(!isNaN(cantidad) && !(codigoProducto<0) )){
        cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar. Ingrese un número mayor a 0"))
    }
    const productoSeleccionado = new prodCarrito(productos[codigoProducto].producto, productos[codigoProducto].precioUnitario, cantidad)
    carrito.contenido.push(productoSeleccionado)
    localStorage.setItem("carrito", JSON.stringify(carrito.contenido))
}


// === Micro 7 ===



// === Ejecutar app ===
function comprar(){
    let loop = true
    while(loop){
        agregarProductoCarrito()
        loop = confirm("desea seguir comprando?")
    }
    alert(`Su factura es de ${carrito.totalDeCompra()}`)
    carrito.contenido = []
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
comprar()




