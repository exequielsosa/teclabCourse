import productos from "./js/productos.js";

const carritoFrutas = [];

function agregarAlCarrito(frutald) {
  if (frutald > 0) {
    const producto = productos.find((p) => p.id === Number(frutald));
    if (producto !== undefined) {
      carritoFrutas.push(producto);
      console.table(carritoFrutas);
    }
  }
}

export default agregarAlCarrito;
