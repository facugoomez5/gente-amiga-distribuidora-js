let productos = [];
fetch("/productos.json")
    .then(Response => Response.json())
    .then(data =>{
        productos = data;
        cargarProductos(productos);
    });

const contenedorProductos = document.querySelector("#listaProductos")
const botonesCategoria = document.querySelectorAll(".producto__boton__categoria")
const tituloPrincipal = document.querySelector("#producto__titulo")
let botonesAgregar = document.querySelectorAll(".producto__boton__agregar")
const contador = document.querySelector("#contador")

function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("producto__tarjeta");
        div.innerHTML = `
            <img class="producto__img" src="${producto.img}" alt="${producto.nombre}">
            <div class="producto__info">
              <h3 class="producto__nombre">${producto.nombre}</h3> 
              <p class="producto__precio">$${producto.precio}</p>
              <button class="producto__boton__agregar boton1" id ="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div)
    })

    cargarBotonesAgregar();
}

botonesCategoria.forEach(boton => {
    boton.addEventListener("click",(e) => {
        if(e.currentTarget.id != "todos"){
            const productosTitulos = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerHTML = productosTitulos.categoria.titulo;

            const productosSeccion = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosSeccion);
        }else{
            tituloPrincipal.innerHTML = "Todos los productos"
            cargarProductos(productos);
        }

    })
});

function cargarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto__boton__agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarCarrito);
    });
}

let productosCarrito;

let productosCarritoLS = localStorage.getItem("producto-carrito"); 

if(productosCarritoLS){
    productosCarrito = JSON.parse(productosCarritoLS);
    actualizarContador();
} else{
    productosCarrito = [];
}


function agregarCarrito(e){
    
    Toastify({
    text: "Producto Agregado",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    background: "#8f0100",
    border: "2px solid",
    borderColor: "#000",
    borderRadius: "10px"
    },
    onClick: function(){} // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosCarrito.some(producto => producto.id === idBoton)){
        const index = productosCarrito.findIndex(producto => producto.id === idBoton)
        productosCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        productosCarrito.push(productoAgregado);
    }

    actualizarContador()

    localStorage.setItem("producto-carrito",JSON.stringify(productosCarrito));
}

function actualizarContador(){
    let nuevoContador = productosCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);
    contador.innerText = nuevoContador;
}


