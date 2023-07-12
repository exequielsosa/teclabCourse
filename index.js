import productos from "./js/productos.js";
import agregarAlCarrito from "./carrito.js";

// Función para generar el código HTML de la Card
function retornarCardHTML(producto) {
  return `
      <div class="card">
      <div class="card-image">${producto.imagen}</div>
      <div class="card-name">${producto.nombre}</div>
      <div class="card-price">${producto.precio}</div>
      <button
      class="button button-outline button-add"
      id="${producto.id}"
      title="Clic para agregar al carrito"
    >
      +
    </button>
       
      </div>
    `;
}

// Función para cargar los productos en el contenedor
function cargarProductos(array) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  array.forEach((producto) => {
    const cardHTML = retornarCardHTML(producto);
    container.innerHTML += cardHTML;
  });
}

function activarClickEnBotones() {
  const botonesAgregar = document.querySelectorAll(
    ".button.button-outline.button-add"
  );
  if (botonesAgregar !== null) {
    for (const boton of botonesAgregar) {
      boton.addEventListener("click", (event) => {
        agregarAlCarrito(event.target.id);
      });
    }
  }
}

// Llamada inicial para cargar los productos
cargarProductos(productos);

// Llamada para activar el evento click en los botones
activarClickEnBotones();
