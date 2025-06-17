import { useState } from "react";
import { useEffect } from "react";

const TaskForm = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    state: false,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showAlertFalsy, setShowAlertFalsy] = useState(false);

  const { name } = task;

  const handleForm = (e) => {
    e.preventDefault();

    let repeatTask = taskList.some(({ name: nameArray }) => name === nameArray);

    if (!repeatTask) {
      if (task.name) {
        setTaskList([...taskList, task]);
        setTask({ ...task, name: "" });
      } else {
        setTimeout(() => {
          setShowAlertFalsy(false);
        }, 1500);
        setShowAlertFalsy(true);
      }
    } else {
      setTimeout(() => {
        setShowAlert(false);
        setTask({ ...task, name: "" });
      }, 1500);
      setShowAlert(true);
    }
  };

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  const handleInput = (e) => {
    const inputValue = e.target.value;

    setTask({ ...task, name: inputValue, id: crypto.randomUUID() });
  };

  return (
    <form onSubmit={handleForm}>
      <section>
        <input onChange={handleInput} type="text" value={name} />
        <button>Enviar</button>
      </section>
      {showAlert && (
        <span>
          La tarea "{name}" ya existe. Por favor ingresa una tarea diferente.
        </span>
      )}
      {showAlertFalsy && <span>Ingrese un valor valido</span>}
    </form>
  );
};

export default TaskForm;
