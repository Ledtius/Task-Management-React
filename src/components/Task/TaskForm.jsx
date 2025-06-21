import { useState } from "react";

import taskFormStyles from "../../styles/Task/TaskForm.module.css";

import { SendIcon } from "lucide-react";

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
  const handleInput = (e) => {
    const inputValue = e.target.value;

    setTask({ ...task, name: inputValue, id: crypto.randomUUID() });
  };

  return (
    <form className={taskFormStyles.form} onSubmit={handleForm}>
      <section className={taskFormStyles.inputBtn}>
        <input
          className={taskFormStyles.input}
          onChange={handleInput}
          type="text"
          placeholder="Digita tu tarea aqui"
          value={name}
        />
        <button className={taskFormStyles.btn}>
          <SendIcon className={taskFormStyles.icon} />
        </button>
      </section>
      <div className={taskFormStyles.alertSection}>
        {showAlert && (
          <small className={taskFormStyles.alert}>Esta tarea ya existe</small>
        )}
        {showAlertFalsy && (
          <small className={taskFormStyles.alert}>Ingrese un valor valido</small>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
