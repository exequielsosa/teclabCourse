 
const almacenarCarrito = () => {
  if (carritoFrutas.length > 0) {
    localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas));
  }
};

const recuperarCarrito = () => {
  const carritoGuardado = localStorage.getItem("carritoFrutas");
  return carritoGuardado ? JSON.parse(carritoGuardado) : [];
};

export const carritoFrutas = recuperarCarrito();

function agregarAlCarrito(frutald,productos) {
  if (frutald > 0) {
    const producto = productos.find((p) => p.id === Number(frutald));
    if (producto !== undefined) {
      carritoFrutas.push(producto);
      console.table(carritoFrutas);      
      almacenarCarrito();
    }
  }
}

export default agregarAlCarrito;
