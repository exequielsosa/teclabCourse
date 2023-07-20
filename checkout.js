let carritoFrutas =
JSON.parse(localStorage.getItem("carritoFrutas")) ?? [];

function retornarCardHTML(producto) {
return `
<tr>
<td>${producto.imagen}</td>
<td>${producto.nombre}</td>
<td>${producto.precio}</td>
<td ><button
class="button-quitar"
id="${producto.id}"
title="Quitar del carrito"
>
Quitar
</Button>
</td>
</tr>
  `;
}

const render = document.getElementById("render");
const productos = carritoFrutas;
if(productos.length !== 0){
  productos.forEach((item) => {
  render.querySelector("tbody").innerHTML += retornarCardHTML(item);
  });
}

const comprarBtn = document.getElementById('btnComprar');
const tablaFrutas = document.getElementById('render');

comprarBtn.addEventListener('click', () => {
    // Mostrar mensaje de agradecimiento
    alert('¡Gracias por tu compra!');

    // Vaciar el array carritoFrutas
    carritoFrutas = [];

    // Vaciar la tabla HTML
    tablaFrutas.innerHTML = '';

    // Vaciar LocalStorage
    localStorage.clear();
});

