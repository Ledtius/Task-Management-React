import { useEffect, useState } from "react";

const TaskItem = ({
  idTask,
  taskName,
  taskDescrip,
  taskState,
  taskList,
  setTaskList,
}) => {
  /* Task name state variables */

  const [taskInput, setTaskInput] = useState(taskName);

  const [showAlertEditTask, setShowAlertEditTask] = useState(false);

  const [showEditTaskBtn, setShowEditTaskBtn] = useState(true);

  const [showEditTask, setShowEditTask] = useState(false);

  const [showAlertEditTaskFalsy, setShowAlertEditTaskFalsy] = useState(false);

  /* Description state variables */

  const [descripInput, setDescripInput] = useState(taskDescrip);

  const [editDescrip, setEditDescrip] = useState("");

  /* Agregue esto porque el editDescrip al la primera edicion no me tomaba el valor del descripInput, me toco utilizar el useEffect, pero la verdad no entiendo porque tube la necesidad de hacerlo, acaso no se remonta el componente cada vez que hago un set...()? por ahora no entiendo, dejare esta duda aqui (ahora veo que si uso escribo en el setEditdescrip(taskDescrip) no me funciona, sera que tengo que utilizar un useEffect para el tambien?, claro si en este caso lo utilizara en vez de el editDescrip?)  */

  useEffect(() => {
    setEditDescrip(descripInput);
  }, [descripInput]);

  const [showAddDecrip, setShowAddDescrip] = useState(false);

  const [showAddDescripBtn, setShowAddDescripBtn] = useState(true);

  const [showDescripMsg, setShowDescripMsg] = useState(false);

  const [showEditDescrip, setShowEditDescrip] = useState(false);

  const [showAlertAddDescrip, setShowAlertAddDescrip] = useState(false);

  const [showAlertEditDescrip, setShowAlertEditDescrip] = useState(false);

  /* Task name functions section */

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
      const sameTaskName = taskList.some(
        ({ name, id } = task) => name === taskInput && idTask !== id
      );

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
    setTaskInput(taskName);
  };

  /* Description functions section */

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
      setShowDescripMsg(true);
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
    setDescripInput("");
  };

  const handleEditDescripBtn = () => {
    setShowEditDescrip(true);
    setShowDescripMsg(false);
  };

  const handleEditDescripInput = (e) => {
    const inputValue = e.target.value;

    setEditDescrip(inputValue);
  };

  const handleEditDescripAcceptBtn = () => {
    console.log(editDescrip);
    if (editDescrip) {
      setShowEditDescrip(false);
      setShowDescripMsg(true);
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
    setShowEditDescrip(false);
    setShowDescripMsg(true);
    setEditDescrip(taskDescrip);
  };

  const handleEditDescripDeleteBtn = () => {
    // setShowAddDescrip(true);
    setDescripInput("");
    setShowAddDescripBtn(true);

    setShowDescripMsg(false);
    setTaskList((prevTaskList) => {
      return prevTaskList.map((task) => {
        if (task.id === idTask) {
          return { ...task, description: "" };
        }
        return task;
      });
    });
  };

  /* Checkbox functions section */

  const handleCheckbox = (e) => {
    const checkboxValue = e.target.checked;

    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => {
        if (task.id === idTask) {
          return { ...task, state: checkboxValue };
        }
        return task;
      })
    );
  };

  /* Task function  */

  const handleTaskDeleteBtn = () => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((task) => {
        if (task.id !== idTask) {
          return task;
        }
      });
    });
  };

  return (
    <li>
      <article>
        <input type="checkbox" onChange={handleCheckbox} checked={taskState} />
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
                value={descripInput}
              />

              <nav>
                <button onClick={handleAddDescripAddBtn}>Añadir Descrip</button>
                <button onClick={handleAddDescripCancelBtn}>
                  Cancel Descrip
                </button>
              </nav>
              {showAlertAddDescrip && (
                <span>Debes de ingresar una descripción valida</span>
              )}
            </div>
          )}

          {/* Cuando se añada la descripción */}
          <div>
            {showDescripMsg && <small>Descripcion añadida{taskDescrip}</small>}
            <nav>
              {showDescripMsg && (
                <button onClick={handleEditDescripBtn}>Editar</button>
              )}
              {showDescripMsg && (
                <button onClick={handleEditDescripDeleteBtn}>Eliminar</button>
              )}
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
        <button onClick={handleTaskDeleteBtn}>Eliminar</button>
      </article>
    </li>
  );
};

export default TaskItem;
