import React from "react";

/* debo recibir los props */
export function evafinal({ todo, cambiarEstado }) {
  const { id, task, completed } = todo;
  const fnCambiarEstado = () => {
    cambiarEstado(id)
  }
  return (
    <li className="list-group-item">
      <input type="checkbox" 
      onChange={fnCambiarEstado}
      className="form-check-input me-2" checked={completed}/>
      {task}
    </li>

  );
  return (
  <ul>
  <li>
    <a href="#">
      <h2>Title #1</h2>
      <p>Text Content #1</p>
    </a>
  </li>
  <li>
    <a href="#">
      <h2>Title #2</h2>
      <p>Text Content #2</p>
    </a>
  </li>
  […]
</ul>)
}

