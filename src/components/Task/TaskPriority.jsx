import { useEffect, useState } from "react";
import taskPriorityStyles from "../../styles/Task/TaskPriority.module.css";

const TaskPriority = ({ setTaskList, idTask, taskPriority }) => {
  const [priorityValue, setPriorityValue] = useState(0);

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
          taskPriority === 1
            ? taskPriorityStyles.low
            : taskPriority === 2
            ? taskPriorityStyles.medium
            : taskPriority === 3
            ? taskPriorityStyles.hight
            : ""
        }`}
      >
        <optgroup label="Nivel de prioridad" />
        <option value={1}>Bajo 🟢</option>
        <option value={2}>Media 🟠</option>
        <option value={3}>Alta 🔴</option>
      </select>
    </form>
  );
};

export default TaskPriority;
