import { Trash2 } from "lucide-react";

import TaskName from "./TaskName";

import TaskDescription from "./TaskDescription";

import TaskPriority from "./TaskPriority";

import taskItemStyles from "../../styles/Task/TaskItem.module.css";

const TaskItem = ({
  idTask,
  taskName,
  taskDescrip,
  taskState,
  taskPriority,
  taskList,
  setTaskList,
}) => {
  /* Checkbox functions section */

  const handleCheckbox = (e) => {
    const checkboxValue = e.target.checked;

    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => {
        if (task.id === idTask) {
          return { ...task, state: checkboxValue };
        }
        return task;
      })
    );
  };

  /* Task function  */

  const handleTaskDeleteBtn = () => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((task) => {
        if (task.id !== idTask) {
          return task;
        }
      });
    });
  };

  return (
    <li
      initial={{ opacity: 0, y: -20 }}
      exit={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, y: 0 }}
      className={taskItemStyles.taskItemTop}
    >
      <article className={taskItemStyles.taskItem}>
        <section className={taskItemStyles.priority}>
          <TaskPriority
            setTaskList={setTaskList}
            idTask={idTask}
            taskPriority={taskPriority}
          />
        </section>

        <section className={taskItemStyles.principal}>
          <label
            className={taskItemStyles.checkboxContent}
            title="Marcar/Desmarcar tarea"
          >
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={taskState}
              className={taskItemStyles.checkbox}
            />
            <span className={taskItemStyles.checkmark}></span>
          </label>

          <section className={taskItemStyles.nameDescrip}>
            <TaskName
              idTask={idTask}
              taskName={taskName}
              taskList={taskList}
              setTaskList={setTaskList}
              taskState={taskState}
            />
            <TaskDescription
              taskList={taskList}
              setTaskList={setTaskList}
              taskDescrip={taskDescrip}
              taskName={taskName}
              idTask={idTask}
            />
          </section>

          <button
            className={taskItemStyles.deleteBtn}
            onClick={handleTaskDeleteBtn}
            title="Eliminar tarea"
          >
            <Trash2 className={taskItemStyles.deleteIcon} />
          </button>
        </section>
      </article>
    </li>
  );
};

export default TaskItem;
