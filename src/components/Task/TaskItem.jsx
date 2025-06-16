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

  const [descripInput, setDescripInput] = useState(taskDescrip);

  const [showAddDecrip, setShowAddDescrip] = useState(false);

  const [showAddDescripBtn, setShowAddDescripBtn] = useState(true);

  const [showEditDescripBtn, setShowEditDescripBtn] = useState(false);

  const [showEditDescrip, setShowEditDescrip] = useState(false);

  const handleAddDescripBtn = () => {
    setShowAddDescrip(true);
    setShowAddDescripBtn(false);
  };

  const handleAddDescripInput = (e) => {
    const inputValue = e.target.value;

    setDescripInput(inputValue);
  };

  const handleAddDescripAddBtn = (e) => {
    setTaskList((prevTaskList) => {
      setShowAddDescripBtn(false);
      setShowAddDescrip(false);

      return prevTaskList.map((task) => {
        if (task.name === taskName) {
          return { ...task, description: descripInput };
        }
        return task;
      });
    });
  };

  const handleAddDescripCancelBtn = () => {
    setShowAddDescrip(false);
    setShowAddDescripBtn(true);
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
          {/* Añadir descripción */}
          {showAddDescripBtn && (
            <footer>
              <small>Añadir descripción</small>
              <button onClick={handleAddDescripBtn}>Añadir</button>
            </footer>
          )}
          {/* Panel para escribir la descripción */}
          {showAddDecrip && (
            <div>
              <input
                type="text"
                placeholder="Escriba el nombre de la descripción"
                onChange={handleAddDescripInput}
              />

              <nav>
                <button onClick={handleAddDescripAddBtn}>Añadir Tarea</button>
                <button onClick={handleAddDescripCancelBtn}>
                  Cancelar (Añadir tarea)
                </button>
              </nav>
            </div>
          )}

          {/* Cuando se añada la descripción */}
          <div>
            <small>Descripcion añadida{taskDescrip}</small>
            <nav>
              <button>Editar</button>
              <button>Eliminar</button>
            </nav>
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
