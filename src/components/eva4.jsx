import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
/* Importar todoitem */
import { evafinal } from "./evafinal";

export function eva4() {
  /* Definir una lista con tareas */
  const [todos, setTodos] = useState([]);

  const taskRef = useRef();

  const agregarTarea = () => {
    /* Rescatar el valor del input */
    const task = taskRef.current.value;
    console.log(task);

    if (task.trim() === "") return;
    console.log("Agregando tarea ...");
    /* Metodo definido por react para operar los elementos */
    setTodos((prevTodos) => {
      const newTask = {
        id: uuid(),
        task: task,
        completed: false,
      };

      return [...prevTodos, newTask];
    });
    taskRef.current.value = null;
  };

  const ResumenTareas = () => {
    const cant = cantidadTareas();

    if (cant === 0) {
      return (
        <div className="alert alert-success mt-3">
          Felicidades no tienes tareas pendientes :)
        </div>
      );
    }

    if (cant === 1) {
      return (
        <div className="alert alert-info mt-3">
          Te queda solamente una tarea pendiente
        </div>
      );
    }

    return (
      <div className="alert alert-info mt-3">
        Te quedan {cant} tareas pendientes
      </div>
    );
  };

  const cantidadTareas = () => {
    /* Filter */
    return todos.filter((todo) => !todo.completed).length;
  };

  const cambiarEstadoTarea = (id) => {
    console.log(id);
    /* Tomar todos los datos de la lista actual de tareas*/
    const newTodos = [...todos];
    /* buscar en la lista ese id */
    const todo = newTodos.find((todo) => todo.id === id);
    /* Cambiamos al estado contrario */
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  const eliminarTareasCompletas = () => {
    /* Filtras todas las tareas que aun no se hacen */
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Listado de Tareas</h1>

      <div className="input-group">
        <input
          type="text"
          ref={taskRef}
          className="form-control"
          placeholder="Ingrese una tarea"
        />
        {/* Boton agregar */}
        <button className="btn btn-outline-success ms-2" onClick={agregarTarea}>
          <i className="bi bi-plus-circle"></i>
        </button>
        {/* Botón eliminar */}
        <button className="btn btn-outline-danger ms-2" onClick={eliminarTareasCompletas}>
          <i className="bi bi-trash2"></i>
        </button>
      </div>

      {/* Cargar lista con tareas */}
      <div>
        <ul className="list-group my-4">
          {/* Método avanzado de js */}
          {/* map es como un foreach */}
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              cambiarEstado={cambiarEstadoTarea}
            ></TodoItem>
          ))}
        </ul>
      </div>

      <ResumenTareas />
    </Fragment>
  );
}
