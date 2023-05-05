let nombre = prompt("Ingrese su nombre y apellido:");
if(nombre != ""){
    alert(`Bienvenido ${nombre} a Distribuidora Gente Amiga`)
}
else{
    alert("Datos incorrectos, ingrese nuevamente su nombre ")
}  


const productos = [
    {id:1 ,nombre:"Picada Chica", precio:2900},
    {id:2 ,nombre:"Picada Grande", precio:2350},
    {id:3 ,nombre:"Picada Grande + Adicionales", precio:3700},
    {id:4 ,nombre:"Picada Premium",precio:4200},
    {id:5 ,nombre:"Box 1", precio:2800},
    {id:6 ,nombre:"Box 2", precio:3300},
    {id:7 ,nombre:"Box 3", precio:4500},
    {id:8 ,nombre:"Box 4", precio:5800},
    {id:9 ,nombre:"Frunai", precio:1000},
    {id:10 ,nombre:"ChocoTorta/Oreo", precio:1000},
    {id:11 ,nombre:"Sandwich de Jamon y Queso", precio:1000},
    {id:12 ,nombre:"Sandwich de Salame y Queso", precio:1000},
    {id:13 ,nombre:"Sandwich de Mortadela con Pistachos y Queso", precio:1150},
    {id:14 ,nombre:"Sandwich de Bondiola y Queso", precio:1150},
    {id:15 ,nombre:"Sorrentinos de Jamon y Muzzarela" , precio:1600},
    {id:16 ,nombre:"Sorrentinos de Vacio Braseado" , precio:1600},
    {id:17 ,nombre:"Sorrentinos de Salmon Rosado" , precio:1600},
    {id:18 ,nombre:"Sorrentinos de Hongos Campestres" , precio:1600}
];

let carrito = [];

let listaProductos = ""
productos.forEach((producto) => {
    listaProductos += (`${producto.id}: ${producto.nombre} precio:$ ${producto.precio} \n`)
});

function calcularTotal(){
    total = 0;
    carrito.forEach((producto) =>{
        total += producto.precio
    })
    return total;
};


function menuInicio(){
    let activado = true;

    do {
        let menu =  Number (prompt ("Ingrese la opcion deseada:\n1-Ver menu\n2-Finalizar compra"))
    if(menu === 1){
        let idProducto = Number(prompt(`Ingrese el producto que desea:\n${(listaProductos)}`))
        let productoExistente = productos.find((producto) => producto.id === idProducto);
        if(productoExistente){
            carrito.push(productoExistente)
            alert(productoExistente.nombre);
        } else{
            alert("Ingreso un producto inexistente, intente nuevamente")
        }
    }else{
        const menu2 = Number(prompt(`El total del carrito es de: $${calcularTotal()}.\nIngrese la opcion deseada:\n1-Seguir comprando\n2-Eliminar un producto\n3-Salir`));
        switch(menu2){
            case 1:
                break;
            case 2:
                let productoSeleccionado = Number(prompt(`Ingrese el producto que desea eliminar:\n${listaProductos}`));
                let eliminarProducto = carrito.filter ((producto) => producto.id === productoSeleccionado);
                if(eliminarProducto){
                    carrito.splice(eliminarProducto,1)
                    alert("Producto eliminado del carrito");
                    break;
                }
                else{
                    alert("Producto no encontrado en el carrito");
                    break;
                }
            case 3:
                activado = false;
                break;
            default:
                alert("Opcion invalida")
                break;
        }
    }
    } while (activado);
}
menuInicio();
