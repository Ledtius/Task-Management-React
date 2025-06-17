import TaskItem from "./TaskItem";

const TaskList = ({ taskList, setTaskList, listState }) => {
  console.log(listState);
  if (listState === "all") {
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
  } else if (listState === "incomplete") {
    const taskListIncomplete = taskList.filter((task) => {
      if (task.state === false) return task;
    });
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
    const taskListComplete = taskList.filter((task) => {
      if (task.state === true) return task;
    });

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
  }
};

/* Why this doesn't work?

 return (
      <ul>
        {taskList.filter(({ id, name, description, state }) => {
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
*/

export default TaskList;
