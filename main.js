//Objetos

const articulos = document.getElementById("articulos");

const personas = [
    { id: 1, nombre: "Juan", edad: 20, saldo: 10000 },
    { id: 2, nombre: "Marcela", edad: 33, saldo: 15000 },
    { id: 3, nombre: "Carlos", edad: 25, saldo: 8000 },
    { id: 4, nombre: "María", edad: 43, saldo: 3000 },
  ];


const productos = [
      { id: 1, nombre: "zapato mujer", precio: 1000 },
      { id: 2, nombre: "camisa", precio: 1350 },
      { id: 3, nombre: "gorra", precio: 750 },
      { id: 4, nombre: "media", precio: 250 },
    ];

    sessionStorage.setItem("carrito", JSON.stringify(productos));

// Cargar persona nueva
function cargarPersona() {
  let id = personas.length + 1;
  let nombre = prompt("Ingresa el nombre del cliente:")
  let edad = parseInt(prompt("Ingresa la edad"));
  let saldo = parseInt(prompt("Ingresa el saldo del cliente:"));

  const persona = {id, nombre, edad, saldo};
  personas.push(persona);
}

// Cargar producto nuevo
function cargarProducto() {
  let id = productos.length + 1;
  let nombre = prompt("Ingresa el nombre del producto")
  let precio = parseInt(prompt("Ingresa el precio"));
  
  const producto = {id, nombre, precio};
  productos.push(producto);
}

// Aplicar funcion cargar persona
// personas.push(cargarPersona());
// console.log(personas);

// Mostrar lista de personas
let mensajePersonas = personas;
mensajePersonas.forEach((persona) => {
  let mensaje = `
    Id: ${persona.id}
    Nombre: ${persona.nombre}
    Edad: ${persona.edad}
    Saldo: ${persona.saldo}
  `;
});

// Mostrar lista de productos
let carrito = [];

productos.forEach(producto => {
   let contenido = document.createElement("div");
   contenido.className = "carta";
   contenido.innerHTML = `
    <h3>Producto: ${producto.nombre}</h3>
    <p>Precio: ${producto.precio} $</p>
    `;
  articulos.append(contenido);

  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  contenido.append(comprar);

});

