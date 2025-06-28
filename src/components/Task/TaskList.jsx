import TaskItem from "./TaskItem";
import taskListStyles from "../../styles/Task/TaskList.module.css";

const TaskList = ({ taskList, setTaskList, listState, filterInput }) => {
  console.log(listState);

  const taskListFilter = () => {
    let translateState;

    if (listState === "incomplete") translateState = false;
    else if (listState === "complete") translateState = true;

    if (listState === "incomplete" || listState === "complete")
      return taskList
        .filter(({ state }) => state === translateState)
        .filter(({ name }) =>
          name.toLowerCase().includes(filterInput.toLowerCase())
        );
    else
      return taskList.filter(({ name }) =>
        name.toLowerCase().includes(filterInput.toLowerCase())
      );
  };

  console.log(taskListFilter());

  return (
    <ul className={taskListStyles.list}>
      {taskListFilter().map(({ id, name, description, state }) => {
        return (
          <TaskItem
            idTask={id}
            taskName={name}
            taskDescrip={description}
            taskState={state}
            taskList={taskList}
            setTaskList={setTaskList}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
