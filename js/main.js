import { listadoProductos } from "./variables.js";
import { contenedorCarrito } from "./variables.js";

listadoProductos.addEventListener("click", productoSeleccionado);
contenedorCarrito.addEventListener("click", eliminarProducto);

document.addEventListener("DOMContentLoaded", () => {
  productos = JSON.parse(localStorage.getItem("producto")) || [];
  mostrarHTML();
});

let productos = [];

function productoSeleccionado(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregarCarrito")) {
    const producto = e.target.parentElement.parentElement;
    if (producto) {
      leerDatos(producto);
    }
  }
}

//leer datos del producto
function leerDatos(producto) {
  const objetoCarro = {
    imagen: producto.querySelector("img").src,
    nombre: producto.querySelector("h3").textContent,
    precio: producto.querySelector(".precio").textContent,
    id: producto.getAttribute("id"),
  };
  productos = [...productos, objetoCarro];
  mostrarHTML();
}

//mostrar html
function mostrarHTML() {
  //limpiar
  limpiarHTML();
  //mostrar
  productos.forEach((producto) => {
    contenedorCarrito.innerHTML += `<img src=${producto.imagen} alt="" />
      <div class="flex-x">
        <p>${producto.nombre}</p>
        <a href="#" id="${producto.id}" class="borrar">X</a>
      </div>
    <p class="price">${producto.precio}</p>
  `;

    localStorage.setItem("producto", JSON.stringify(productos));
  });

  //productos previos
  function limpiarHTML() {
    contenedorCarrito.innerHTML = "";
  }
}

function eliminarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar")) {
    const productoID = e.target.getAttribute("id");

    productos = productos.filter((producto) => producto.id !== productoID);
    mostrarHTML();
  }
}
