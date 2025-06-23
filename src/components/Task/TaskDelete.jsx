import taskDeleteStyles from "../../styles/Task/TaskDelete.module.css";

import { ListX } from "lucide-react";

const TaskDelete = ({ taskList, setTaskList, listState }) => {
  const handleBtn = () => {
    if (listState === "incomplete")
      setTaskList((prevTaskList) =>
        prevTaskList.filter(({ state }) => state !== false)
      );
    else if (listState === "complete")
      setTaskList((prevTaskList) =>
        prevTaskList.filter(({ state }) => state !== true)
      );
    else setTaskList([]);
  };

  return (
    <section className={taskDeleteStyles.section}>
      <button className={taskDeleteStyles.deleteBtn} onClick={handleBtn}>
        <ListX className={taskDeleteStyles.deleteIcon} />
      </button>
    </section>
  );
};

export default TaskDelete;
