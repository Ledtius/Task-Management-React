import { useState } from "react";
import { useEffect } from "react";

const TaskForm = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    state: true,
  });

  const appearStyles = { display: "block" };

  const disappStyles = { display: "none" };

  const [alertStyles, setAlertStyles] = useState(disappStyles);

  console.log(alertStyles);
  const { name } = task;

  const randomId = crypto.randomUUID();

  const handleForm = (e) => {
    e.preventDefault();

    let repeatTask = taskList.some(({ name: nameArray }) => name === nameArray);

    console.log(repeatTask);
    if (!repeatTask) {
      setTaskList([...taskList, task]);
      setTask({ ...task, name: "" });
    } else {
      setTimeout(() => {
        setAlertStyles(disappStyles);
        setTask({ ...task, name: "" });
      }, [1500]);
      setAlertStyles(appearStyles);
    }
  };

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  const handleInput = (e) => {
    const inputValue = e.target.value;

    setTask({ ...task, name: inputValue, id: randomId });
  };

  return (
    <form onSubmit={handleForm}>
      <section>
        <input onChange={handleInput} type="text" value={name} />
        <button>Enviar</button>
      </section>
      <span style={alertStyles}>
        La tarea "{name}" ya existe. Por favor ingresa una tarea diferente.
      </span>
    </form>
  );
};

export default TaskForm;
