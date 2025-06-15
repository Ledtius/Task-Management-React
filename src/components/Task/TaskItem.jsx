import { useState } from "react";

const TaskItem = ({
  idTask,
  taskName,
  taskDescrip,
  taskStatus,
  taskList,
  setTaskList,
}) => {
  const [taskInput, setTaskInput] = useState(taskName);

  const handleEditTaskBtn = () => {};

  const handleEditTaskInput = (e) => {
    const inputValue = e.target.value;

    setTaskInput(inputValue);
  };

  const [showAlertTask, setShowAlertTask] = useState(false);

  const handleEditTaskAcceptBtn = () => {
    const sameTaskName = taskList.some(({ name }) => name === taskInput);

    console.log(sameTaskName);
    if (!sameTaskName)
      setTaskList((prevTaskList) =>
        prevTaskList.map((task) => {
          if (task.id === idTask) {
            return { ...task, name: taskInput };
          }
          return task;
        })
      );
    else {
      setTimeout(() => {
        setShowAlertTask(false);
      }, 1500);
      setShowAlertTask(true);
    }
  };

  return (
    <li>
      <article>
        <input type="checkbox" name="" id="" />
        <section>
          <header>
            <span>{taskName}</span>
            <button>Editar</button>
          </header>
          {/* Panel cuando das a editar */}
          <div>
            <input
              type="text"
              placeholder={"Editando nombre..."}
              onChange={handleEditTaskInput}
              value={taskInput}
            />
            {showAlertTask && (
              <span>
                Esta tarea ya existe. Por favor ingresa una tarea diferente.
              </span>
            )}
            <nav>
              <button onClick={handleEditTaskAcceptBtn}>Aceptar</button>
              <button>Cancelar</button>
            </nav>
          </div>
          <footer>
            <small>Añadir descripción</small>
            <button>Añadir</button>
          </footer>
          {/* Cuando se añada la tarea */}
          <div>
            <small>{taskDescrip}</small>
            <button>Editar</button>
          </div>

          {/* Panel cuando das a editar */}
          <div>
            <input type="text" placeholder={"Editando descripción..."} />
            <nav>
              <button>Aceptar</button>
              <button>Cancelar</button>
            </nav>
          </div>
        </section>
        <button>Eliminar</button>
      </article>
    </li>
  );
};

export default TaskItem;
