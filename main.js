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

// Mensaje en navegador
//alert (mensajePersonas);


// Menú

alert("Programa de compra y carga de clientes o productos");
function menu (){

    do {
        operacion = parseInt(prompt("Menú\n1. Cargar cliente\n2. Cargar producto\n3. Listar clientes\n4. Listar productos\n5. Comprar\n6. Salir"));
        switch (operacion) {
                case 1:
                  cargarPersona();
                break;
            
                case 2:
                  cargarProducto();
                break;
            
                case 3:
                  alert(mensajePersonas);
                break;
            
                case 4:
                  alert(mensajeProductos);
                break;

                case 5:
                    alert("Bueno, hoy amigue agarrá la conservadora, con unas bebidas bien frías y nos vemos. Me despido porque mis circuitos se van a derretir. Chau ;(");
                return;
                break;

                case 6:
                    alert("Hasta luego");
                return;
                break;
            
                default:
                    alert("¿Qué es lo que tu dice?");
                break;
            }

    } while (operacion!=6);
}
menu ();
