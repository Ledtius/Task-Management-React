import { Settings2, LucideDiamondPlus } from "lucide-react";
import { useEffect, useState } from "react";
import taskPriorityStyles from "../../styles/Task/TaskPriority.module.css";

const TaskPriority = ({ setTaskList, idTask, taskPriority }) => {
  const [priorityStyles, setPriorityStyles] = useState({
    showMessage: true,
    showPriority: false,
  });

  const [priorityValue, setPriorityValue] = useState("low");

  const { showMessage, showPriority } = priorityStyles;

  const handleMessage = () => {
    setPriorityStyles({ showMessage: false, showPriority: true });
  };

  useEffect(() => {
    if (priorityValue !== "low")
      setTaskList((prevTaskList) =>
        prevTaskList.map((task) => {
          if (task.id === idTask) return { ...task, priority: priorityValue };
          return task;
        })
      );
  }, [priorityValue]);

  const handleSelect = (e) => {
    const valueId = e.currentTarget.value;
    setPriorityValue(valueId);
  };
  return (
    <form>
      <select onClick={handleSelect} name="" id="">
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="hight">Alta</option>
      </select>
    </form>
  );
};

export default TaskPriority;
