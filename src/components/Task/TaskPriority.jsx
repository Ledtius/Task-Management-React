import { useEffect, useState } from "react";
import taskPriorityStyles from "../../styles/Task/TaskPriority.module.css";

const TaskPriority = ({ setTaskList, idTask, taskPriority }) => {
  const [priorityValue, setPriorityValue] = useState("");

  useEffect(() => {
    if (priorityValue)
      setTaskList((prevTaskList) =>
        prevTaskList.map((task) => {
          if (task.id === idTask) return { ...task, priority: priorityValue };
          return task;
        })
      );
  }, [priorityValue]);

  return (
    <form className={taskPriorityStyles.form}>
      <select
        value={taskPriority}
        onChange={(e) => setPriorityValue(e.target.value)}
        id="priority-select"
        className={`${taskPriorityStyles.select} ${
          taskPriority === "low"
            ? taskPriorityStyles.low
            : taskPriority === "medium"
            ? taskPriorityStyles.medium
            : taskPriority === "hight"
            ? taskPriorityStyles.hight
            : ""
        }`}
      >
        <optgroup label="Nivel de prioridad" />
        <option value="low">Bajo 🟢</option>
        <option value="medium">Media 🟠</option>
        <option value="hight">Alta 🔴</option>
      </select>
    </form>
  );
};

export default TaskPriority;
