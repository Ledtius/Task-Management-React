import { useEffect, useState } from "react";

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

  /* Description */

  const [descripInput, setDescripInput] = useState(taskDescrip);

  const [editDescrip, setEditDescrip] = useState("");

  /* Agregue esto porque el editDescrip al la primera edicion no me tomaba el valor del descripInput, me toco utilizar el useEffect, pero la verdad no entiendo porque tube la necesidad de hacerlo, acaso no se remonta el componente cada vez que hago un set...()? por ahora no entiendo, dejare esta duda aqui (ahora veo que si uso escribo en el setEditdescrip(taskDescrip) no me funciona, sera que tengo que utilizar un useEffect para el tambien?, claro si en este caso lo utilizara en vez de el editDescrip?)  */

  useEffect(() => {
    setEditDescrip(descripInput);
  }, [descripInput]);

  const [showAddDecrip, setShowAddDescrip] = useState(false);

  const [showAddDescripBtn, setShowAddDescripBtn] = useState(true);

  const [showEditDescripBtn, setShowEditDescripBtn] = useState(false);

  const [showEditDescrip, setShowEditDescrip] = useState(false);

  const [showAlertAddDescrip, setShowAlertAddDescrip] = useState(false);

  const [showAlertEditDescrip, setShowAlertEditDescrip] = useState(false);

  const [showAlertEditTaskFalsy, setShowAlertEditTaskFalsy] = useState(false);

  const handleEditTaskBtn = () => {
    setShowEditTask(true);
    setShowEditTaskBtn(false);
  };

  const handleEditTaskInput = (e) => {
    const inputValue = e.target.value;

    setTaskInput(inputValue);
  };

  const handleEditTaskAcceptBtn = () => {
    if (taskInput) {
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
    } else {
      setTimeout(() => {
        setShowAlertEditTaskFalsy(false);
      }, 1500);
      setShowAlertEditTaskFalsy(true);
    }
  };

  const handleEditTaskCancelBtn = () => {
    setShowEditTask(false);
    setShowEditTaskBtn(true);
  };

  const handleAddDescripBtn = () => {
    setShowAddDescrip(true);
    setShowAddDescripBtn(false);
  };

  const handleAddDescripInput = (e) => {
    const inputValue = e.target.value;

    setDescripInput(inputValue);
  };

  const handleAddDescripAddBtn = (e) => {
    if (descripInput) {
      setShowAddDescripBtn(false);
      setShowAddDescrip(false);
      setShowEditDescripBtn(true);
      setTaskList((prevTaskList) => {
        return prevTaskList.map((task) => {
          if (task.name === taskName) {
            return { ...task, description: descripInput };
          }
          return task;
        });
      });
    } else {
      setTimeout(() => {
        setShowAlertAddDescrip(false);
      }, 1500);
      setShowAlertAddDescrip(true);
    }
  };

  const handleAddDescripCancelBtn = () => {
    setShowAddDescrip(false);
    setShowAddDescripBtn(true);
  };

  const handleEditDescripBtn = () => {
    setShowEditDescrip(true);
    setShowEditDescripBtn(false);
  };

  const handleEditDescripInput = (e) => {
    const inputValue = e.target.value;

    setEditDescrip(inputValue);
  };

  const handleEditDescripAcceptBtn = () => {
    console.log(editDescrip);
    if (editDescrip) {
      setShowEditDescrip(false);
      setShowEditDescripBtn(true);
      setTaskList((prevTaskList) => {
        return prevTaskList.map((task) => {
          if (task.description === taskDescrip) {
            return { ...task, description: editDescrip };
          }
          return task;
        });
      });
    } else {
      console.log("12");
      setTimeout(() => {
        setShowAlertEditDescrip(false);
      }, 1500);
      setShowAlertEditDescrip(true);
    }
  };

  const handleEditDescripCancelBtn = () => {
    setShowEditDescripBtn(true);
    setShowEditDescrip(false);
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
              {showAlertEditTaskFalsy && <span>Ingrese un valor valido</span>}
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
              {showAlertAddDescrip && (
                <span>Debes de ingresar una descripción valida</span>
              )}
            </div>
          )}

          {/* Cuando se añada la descripción */}
          <div>
            <small>Descripcion añadida{taskDescrip}</small>
            <nav>
              {showEditDescripBtn && (
                <button onClick={handleEditDescripBtn}>Editar</button>
              )}
              <button>Eliminar</button>
            </nav>
          </div>

          {/* Panel cuando das a editar */}
          {showEditDescrip && (
            <div>
              <input
                type="text"
                placeholder={"Editando descripción..."}
                value={editDescrip}
                onChange={handleEditDescripInput}
              />
              <nav>
                <button onClick={handleEditDescripAcceptBtn}>Aceptar</button>
                <button onClick={handleEditDescripCancelBtn}>Cancelar</button>
              </nav>
              {showAlertEditDescrip && (
                <span>Debes de ingresar una descripción valida</span>
              )}
            </div>
          )}
        </section>
        <button>Eliminar</button>
      </article>
    </li>
  );
};

export default TaskItem;
