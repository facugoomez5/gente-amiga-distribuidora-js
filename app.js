const productos =  [
    {
        id:"Picada-Chica",
        nombre:"Picada Chica", 
        precio:2900, 
        img:"./img/picada1.jpg",
        categoria:{
            titulo:"Picadas",
            id: "picadas"
        }
    },
    {
        id:"Picada-Grande" ,
        nombre:"Picada Grande", 
        precio:2350, 
        img:"./img/picada2.jpg",
        categoria:{
            titulo:"Picadas",
            id: "picadas"
        }
        
    },
    {
        id:"Picada-Grande-Adicionales",
        nombre:"Picada Grande + Adicionales", 
        precio:3700, 
        img:"./img/picada3.jpg",
        categoria:{
            titulo:"Picadas",
            id: "picadas"
        }
    },
    {
        id:"Picada-Premium" ,
        nombre:"Picada Premium",
        precio:4200, 
        img:"./img/picada4.jpg",
        categoria:{
            titulo:"Picadas",
            id: "picadas"
        }
    },
    {
        id:"Box-1" ,
        nombre:"Box 1", 
        precio:2800,
        img:"./img/boxRegalo.jpg",
        categoria:{
            titulo:"Box",
            id: "box"
        }
    },
    {
        id:"Box-2" ,
        nombre:"Box 2", 
        precio:3300,
        img:"./img/boxRegalo1.jpg",
        categoria:{
            titulo:"Box",
            id: "box"
        }
    },
    {
        id:"Box-3" ,
        nombre:"Box 3", 
        precio:4500,
        img:"./img/boxRegalo2.jpg",
        categoria:{
            titulo:"Box",
            id: "box"
        }
    },
    {
        id:"Box-4" ,
        nombre:"Box 4", 
        precio:5800,
        img:"./img/boxRegalo3.jpg",
        categoria:{
            titulo:"Box",
            id: "box"
        }
    },
    {
        id:"Frunai",
        nombre:"Frunai", 
        precio:1000,
        img:"./img/postre.jpg",
        categoria:{
            titulo:"Postres",
            id: "postre"
        }
    },
    {
        id:"ChocoTorta/Oreo",
        nombre:"ChocoTorta/Oreo", 
        precio:1000,
        img:"./img/postre1.png",
        categoria:{
            titulo:"Postres",
            id: "postre"
        }
    },
    {
        id:"Sandwich-de-Jamon-Queso",
        nombre:"Sandwich de Jamon y Queso", 
        precio:1000,
        img:"./img/sandwich.jpg",
        categoria:{
            titulo:"Sandwiches",
            id: "sandwich"
        }
    },
    {
        id:"Sandwich-de-Salame-Queso" ,
        nombre:"Sandwich de Salame y Queso", 
        precio:1000,
        img:"./img/sandwich1.jpg",
        categoria:{
            titulo:"Sandwiches",
            id: "sandwich"
        }
    },
    {
        id:"Sandwich-de-Mortadela-con-Pistachos-Queso",
        nombre:"Sandwich de Mortadela con Pistachos y Queso", 
        precio:1150,
        img:"./img/sandwich2.jpg",
        categoria:{
            titulo:"Sandwiches",
            id: "sandwich"
        }
    },
    {
        id:"Sandwich-de-Bondiola-Queso",
        nombre:"Sandwich de Bondiola y Queso", 
        precio:1150,
        img:"./img/sandwich3.jpg",
        categoria:{
            titulo:"Sandwiches",
            id: "sandwich"
        }
    },
    {
        id:"Sorrentinos-de-Jamon-Muzzarela",
        nombre:"Sorrentinos de Jamon y Muzzarela" , 
        precio:1600,
        img:"./img/sorrentinos.jpg",
        categoria:{
            titulo:"Sorrentinos",
            id: "sorrentinos"
        }
    },
    {
        id:"Sorrentinos-de-Vacio-Braseado",
        nombre:"Sorrentinos de Vacio Braseado" , 
        precio:1600,
        img:"./img/sorrentinos1.jpg",
        categoria:{
            titulo:"Sorrentinos",
            id: "sorrentinos"
        }
    },
    {
        id:"Sorrentinos-de-Salmon-Rosado",
        nombre:"Sorrentinos de Salmon Rosado" ,
        precio:1600,
        img:"./img/sorrentinos2.jpg",
        categoria:{
            titulo:"Sorrentinos",
            id: "sorrentinos"
        }
    },
    {
        id:"Sorrentinos-de-Hongos-Campestres",
        nombre:"Sorrentinos de Hongos Campestres" , 
        precio:1600,
        img:"./img/sorrentinos3.jpg",
        categoria:{
            titulo:"Sorrentinos",
            id: "sorrentinos"
        }
    }
];

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
cargarProductos(productos);

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
    console.log(nuevoContador)
    contador.innerText = nuevoContador;
}

