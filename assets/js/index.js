let tarea = [
  { id: 12, nombre: "Comprar pan", completado: false },
  { id: 13, nombre: "Comprar harina", completado: false },
  { id: 14, nombre: "Pasear al perro", completado: false }


];
const btnAgregar = document.querySelector("#btnAgregar");
const tareaInput = document.querySelector("#tareaInput");
const listaTareas = document.querySelector("#listaTareas");
const totalTareas = document.querySelector("#totalTareas");
const tareasCompletadas = document.querySelector("#totalCompletadas");

function contador() {
  totalTareas.textContent = tarea.length;
  tareasCompletadas.textContent = tarea.filter(
    (item) => item.completado
  ).length;
}

btnAgregar.addEventListener("click", () => {
  let nuevatarea = {
    id: Date.now(),
    nombre: tareaInput.value,
    completado: false,
  };
  tarea.push(nuevatarea);

  tareaInput.value = "";
  renderTareas();
  contador();
});

function renderTareas() {
  let html = "";
  for (let tareas of tarea) {
    html += `<li>
      <span>${tareas.id}</span>
        <span>${tareas.nombre}</span>
        <input type="checkbox" onchange="estado(${tareas.id})" ${tareas.completado ? "checked" : ""}>
        <button onclick="borrar(${tareas.id})">x</button>
         </li>`;
  }
  listaTareas.innerHTML = html;
}

function borrar(id) {
  const index = tarea.findIndex((ele) => ele.id == id);
  tarea.splice(index, 1);
  renderTareas();
  contador();
}
function estado(id) {
  const index = tarea.findIndex((ele) => ele.id == id);
  if (index > -1) {
    tarea[index].completado = !tarea[index].completado;
    renderTareas();
    contador();
  }
}
renderTareas();
contador();
