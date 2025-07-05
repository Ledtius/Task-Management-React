import { useState } from "react";

import taskFormStyles from "../../styles/Task/TaskForm.module.css";

import { SendIcon } from "lucide-react";

const TaskForm = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    priority: 0,
    state: false,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showAlertFalsy, setShowAlertFalsy] = useState(false);

  const { name } = task;

  const showTemporaryAlert = (setter, duration = 1500, callback) => {
    setter(true);
    setTimeout(() => {
      setter(false);
      if (callback) callback();
    }, duration);
  };

  const handleForm = (e) => {
    e.preventDefault();

    let repeatTask = taskList.some(({ name: nameArray }) => name === nameArray);

    if (!repeatTask) {
      if (name) {
        setTaskList([...taskList, task]);
        setTask({ ...task, name: "" });
      } else {
        showTemporaryAlert(setShowAlertFalsy);
      }
    } else {
      showTemporaryAlert(setShowAlert, 800, () =>
        setTask({ ...task, name: "" })
      );
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
        <button className={taskFormStyles.btn} aria-label="Send task">
          <SendIcon className={taskFormStyles.icon} />
        </button>
      </section>
      <div className={taskFormStyles.alertSection}>
        {showAlert && (
          <small className={taskFormStyles.alert}>Esta tarea ya existe</small>
        )}
        {showAlertFalsy && (
          <small className={taskFormStyles.alert}>
            Ingrese un valor valido
          </small>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
