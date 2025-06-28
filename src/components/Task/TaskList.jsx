import TaskItem from "./TaskItem";
import taskListStyles from "../../styles/Task/TaskList.module.css";

const TaskList = ({ taskList, setTaskList, listState, filterInput }) => {
  console.log(listState);
  if (listState === "all") {
    if (!filterInput) {
      return (
        <ul className={taskListStyles.list}>
          {taskList.map(({ id, name, description, state }) => (
            <TaskItem
              idTask={id}
              taskName={name}
              taskDescrip={description}
              taskState={state}
              taskList={taskList}
              setTaskList={setTaskList}
              key={id}
            />
          ))}
        </ul>
      );
    } else {
      const taskListFilterAll = taskList.filter(({ name }) =>
        name.toLowerCase().includes(filterInput.toLowerCase())
      );

      return (
        <ul className={taskListStyles.list}>
          {taskListFilterAll.map(({ id, name, description, state }) => (
            <TaskItem
              idTask={id}
              taskName={name}
              taskDescrip={description}
              taskState={state}
              taskList={taskList}
              setTaskList={setTaskList}
              key={id}
            />
          ))}
        </ul>
      );
    }
  } else if (listState === "incomplete") {
    const taskListIncomplete = taskList.filter((task) => task.state === false);
    if (!filterInput) {
      return (
        <ul className={taskListStyles.list}>
          {taskListIncomplete.map(({ id, name, description, state }) => {
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
    } else {
      const taskListIncompleteFilter = taskListIncomplete.filter(({ name }) =>
        name.toLowerCase().includes(filterInput.toLowerCase())
      );

      return (
        <ul className={taskListStyles.list}>
          {taskListIncompleteFilter.map(({ id, name, description, state }) => {
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
    }
  } else {
    const taskListComplete = taskList.filter((task) => task.state === true);
    if (!filterInput) {
      return (
        <ul className={taskListStyles.list}>
          {taskListComplete.map(({ id, name, description, state }) => {
            if (state === true)
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
    } else {
      const taskListCompleteFilter = taskListComplete.filter(({ name }) =>
        name.toLowerCase().includes(filterInput.toLowerCase())
      );

      return (
        <ul className={taskListStyles.list}>
          {taskListCompleteFilter.map(({ id, name, description, state }) => {
            if (state === true)
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
    }
  }
};

export default TaskList;
