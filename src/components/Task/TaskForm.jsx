import { useState } from "react";

const TaskForm = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    state: true,
  });

  return (
    <form action="">
      <input type="text" name="" id="" />
      <button>Enviar</button>
    </form>
  );
};

export default TaskForm;
