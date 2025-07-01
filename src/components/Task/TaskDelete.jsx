import taskDeleteStyles from "../../styles/Task/TaskDelete.module.css";

import { ListX } from "lucide-react";

const TaskDelete = ({ setTaskList, listState }) => {
  const handleDeleteList = (bool) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter(({ state }) => state !== bool)
    );
  };

  const handleBtn = () => {
    switch (listState) {
      case "incomplete":
        handleDeleteList(false);
        break;
      case "complete":
        handleDeleteList(true);
        break;

      default:
        setTaskList([]);
        break;
    }
  };

  return (
    <section className={taskDeleteStyles.section}>
      <button
        className={taskDeleteStyles.deleteBtn}
        onClick={handleBtn}
        title={`Eliminar tareas de: '${listState}'`}
      >
        <ListX className={taskDeleteStyles.deleteIcon} />
      </button>
    </section>
  );
};

export default TaskDelete;
