import { useState } from "react";

const TaskForm = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    state: true,
  });

  const { name } = task;

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;

    setTask({ ...task, name: inputValue });
  };

  return (
    <form action="" onSubmit={handleForm}>
      <input onChange={handleInput} type="text" value={name} />
      <button>Enviar</button>
    </form>
  );
};

export default TaskForm;
