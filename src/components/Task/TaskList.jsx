import TaskItem from "./TaskItem";

const TaskList = ({ taskList, setTaskList }) => {
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
};

export default TaskList;
