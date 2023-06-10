let productosCarrito = localStorage.getItem("producto-carrito"); 
productosCarrito = JSON.parse(productosCarrito);

const carritoVacio = document.querySelector("#carrito__vacio")
const carritoContenedor = document.querySelector("#carrito__contenedor")
const carritoCompra = document.querySelector("#carrito__compra")
const carritoProductos = document.querySelector("#carrito__productos")
let botonEliminar = document.querySelector(".carrito__producto__eliminar")
const botonVaciar = document.querySelector("#carrito__acciones__vaciar")
const total = document.querySelector("#total")

function cargarProductosCarrito(){
    if(productosCarrito && productosCarrito.length > 0){   
    
    carritoVacio.classList.add("disableb");
    carritoContenedor.classList.remove("disableb");
    carritoCompra.classList.remove("disableb");
    
    carritoProductos.innerHTML = "";

    productosCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito__producto");
        div.innerHTML = `
        <img src=".${producto.img}" alt="${producto.nombre}">
        <div class = "carrito__producto__nombre">
            <h3>Nombre</h3>
            <h2>${producto.nombre}</h2>
        </div>  
        <div class="carrito__producto__cantidad">
            <h3>Cantidad</h3>
            <h2>${producto.cantidad}</h2>
        </div>
        <div class="carrito__producto__precio">
            <h3>Precio</h3>
            <h2>${producto.precio}</h2>
        </div>
        <div class="carrito__producto__subtotal">
            <h3>SubTotal</h3>
            <h2>$${producto.precio * producto.cantidad}</h2>
        </div>
        <button id="${producto.id}" class="carrito__producto__eliminar"><i class="bi bi-trash"></i></button>
        `;
        carritoProductos.append(div);
    });
    }else{
        carritoVacio.classList.remove("disableb");
        carritoContenedor.classList.add("disableb");
        carritoCompra.classList.add("disableb");
    };

    cargarBotonesEliminar();
    actualizarTotal();
}
cargarProductosCarrito();



function cargarBotonesEliminar(){
    botonEliminar = document.querySelectorAll(".carrito__producto__eliminar");

    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarCarrito);
    });
}

function eliminarCarrito(e){

    const idBoton = e.currentTarget.id;
    const index = productosCarrito.findIndex(producto => producto.id === idBoton);
    
    productosCarrito.splice(index,1);
    cargarProductosCarrito();

    localStorage.setItem("producto-carrito",JSON.stringify(productosCarrito));
    
}

botonVaciar.addEventListener("click",vaciarCarrito);

function vaciarCarrito(){

    productosCarrito.length = 0;
    localStorage.setItem("producto-carrito",JSON.stringify(productosCarrito));
    cargarProductosCarrito();
}


function actualizarTotal(){
    const montoTotal = productosCarrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidad), 0)
    total.innerText =  `$${montoTotal}`
}
