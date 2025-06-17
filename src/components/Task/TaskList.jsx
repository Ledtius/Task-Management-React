import { useEffect } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList, setTaskList, listState, filterInput }) => {
  if (listState === "all") {
    if (!filterInput) {
      return (
        <ul>
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
        name.includes(filterInput)
      );

      return (
        <ul>
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
        <ul>
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
        name.includes(filterInput)
      );

      return (
        <ul>
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
        <ul>
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
        name.includes(filterInput)
      );

      return (
        <ul>
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
