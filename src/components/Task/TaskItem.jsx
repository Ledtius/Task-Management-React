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

  const [showAlertEditTask, setShowAlertEditTask] = useState(false);

  const [showEditTaskBtn, setShowEditTaskBtn] = useState(true);

  const [showEditTask, setShowEditTask] = useState(false);

  const handleEditTaskBtn = () => {
    setShowEditTask(true);
    setShowEditTaskBtn(false);
  };

  const handleEditTaskInput = (e) => {
    const inputValue = e.target.value;

    setTaskInput(inputValue);
  };

  const handleEditTaskAcceptBtn = () => {
    const sameTaskName = taskList.some(({ name }) => name === taskInput);

    if (!sameTaskName) {
      setTaskList((prevTaskList) =>
        prevTaskList.map((task) => {
          if (task.id === idTask) {
            return { ...task, name: taskInput };
          }
          return task;
        })
      );
      setShowEditTaskBtn(true);
      setShowEditTask(false);
    } else {
      setTimeout(() => {
        setShowAlertEditTask(false);
      }, 1500);
      setShowAlertEditTask(true);
    }
  };

  const handleEditTaskCancelBtn = () => {
    setShowEditTask(false);
    setShowEditTaskBtn(true);
  };

  return (
    <li>
      <article>
        <input type="checkbox" name="" id="" />
        <section>
          <header>
            <span>{taskName}</span>

            {showEditTaskBtn && (
              <button onClick={handleEditTaskBtn}>Editar</button>
            )}
          </header>
          {/* Panel cuando das a editar */}
          {showEditTask && (
            <div>
              <input
                type="text"
                placeholder={"Editando nombre..."}
                onChange={handleEditTaskInput}
                value={taskInput}
              />
              {showAlertEditTask && (
                <span>
                  Esta tarea ya existe. Por favor ingresa una tarea diferente.
                </span>
              )}
              <nav>
                <button onClick={handleEditTaskAcceptBtn}>Aceptar</button>
                <button onClick={handleEditTaskCancelBtn}>Cancelar</button>
              </nav>
            </div>
          )}
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
