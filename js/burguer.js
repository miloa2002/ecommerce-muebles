import { carritoCompra } from "./variables.js";
import { contenedorCarrito } from "./variables.js";

carritoCompra.addEventListener("click", () => {
  if (contenedorCarrito.style.display === "none") {
    contenedorCarrito.style.display = "block";
  } else {
    contenedorCarrito.style.display = "none";
  }
});
