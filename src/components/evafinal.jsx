import React from "react";

/* debo recibir los props */
export function Evafinal (todo)  {
  const { id, task, completed } = todo;
  const fnCambiarEstado = () => {
    
  }
  
  return (
        <div>
             <li className="note">
              <input
                className="note__title"
                type="text"
                placeholder="Title"
                value={todo.task}
               
              />
              <textarea
                className="note__description"
                placeholder="Description..."
                value={todo.task}
               
              />
              <span className="note__delete" >
                X
              </span>
            </li>
        </div>

  );
}
