import TaskItem from "./TaskItem";
import taskListStyles from "../../styles/Task/TaskList.module.css";

import * as motion from "motion/react-client";

const TaskList = ({ taskList, setTaskList, listState, filterInput }) => {
  const taskListFilter = () => {
    let translateState;

    if (listState === "incomplete") translateState = false;
    else if (listState === "complete") translateState = true;

    if (listState === "incomplete" || listState === "complete")
      return taskList
        .filter(({ state }) => state === translateState)
        .filter(({ name }) =>
          name.toLowerCase().includes(filterInput.toLowerCase())
        )
        .sort((task1, task2) => task1.priority - task2.priority)
        .reverse();
    else
      return taskList
        .filter(({ name }) =>
          name.toLowerCase().includes(filterInput.toLowerCase())
        )
        .sort((task1, task2) => task1.priority - task2.priority)
        .reverse();
  };

  return (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={taskListStyles.list}
    >
      {taskListFilter().map(({ id, name, description, priority, state }) => {
        return (
          <TaskItem
            idTask={id}
            taskName={name}
            taskDescrip={description}
            taskPriority={priority}
            taskState={state}
            taskList={taskList}
            setTaskList={setTaskList}
            key={id}
          />
        );
      })}
    </motion.ul>
  );
};

export default TaskList;
