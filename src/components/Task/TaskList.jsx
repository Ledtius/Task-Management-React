import TaskItem from "./TaskItem";

const TaskList = ({ taskList, setTaskList }) => {
  return (
    <ul>
      {taskList.map(({ id, name, description, status }) => (
        <TaskItem
          idTask={id}
          taskName={name}
          taskDescrip={description}
          taskStatus={status}
          taskList={taskList}
          setTaskList={setTaskList}
          key={id}
        />
      ))}
    </ul>
  );
};

export default TaskList;
