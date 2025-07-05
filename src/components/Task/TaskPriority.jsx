import { useEffect, useState } from "react";
import taskPriorityStyles from "../../styles/Task/TaskPriority.module.css";

const TaskPriority = ({ setTaskList, idTask, taskPriority }) => {
  const [priorityValue, setPriorityValue] = useState(0);

  useEffect(() => {
    console.log(priorityValue);
    if (priorityValue)
      setTaskList((prevTaskList) =>
        prevTaskList.map((task) => {
          if (task.id === idTask) return { ...task, priority: priorityValue };
          return task;
        })
      );

    console.log(priorityValue);
  }, [priorityValue]);

  const priorityStyleSelect = () => {
    if (taskPriority === 1) return taskPriorityStyles.low;
    else if (taskPriority === 2) return taskPriorityStyles.medium;
    else if (taskPriority === 3) return taskPriorityStyles.hight;
    return taskPriorityStyles.low;
  };

  return (
    <form className={taskPriorityStyles.form}>
      <select
        value={taskPriority}
        onChange={(e) => setPriorityValue(Number(e.target.value))}
        id="priority-select"
        className={`${taskPriorityStyles.select} ${priorityStyleSelect()}`}
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
