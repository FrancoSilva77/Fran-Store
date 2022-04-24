//Menú
const nav = document.querySelector("#nav");
const navegacion = document.querySelector(".navegacion");

nav.addEventListener("click", menuResponsive);

function menuResponsive() {
  if (navegacion.classList.contains("navegacion--activa")) {
    console.log('Activo');
    navegacion.classList.remove("navegacion--activa");
  } else {
    console.log('No activo');
    navegacion.classList.add("navegacion--activa");
  }
}
