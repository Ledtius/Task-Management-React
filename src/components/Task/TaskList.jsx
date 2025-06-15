import TaskItem from "./TaskItem";

const TaskList = ({ taskList, setTaskList }) => {
  return (
    <ul>
      {taskList.map(({ id, name, description, status }) => (
        <TaskItem
          idTask={id}
          TaskName={name}
          taskDescrip={description}
          taskStatus={status}
          key={id}
        />
      ))}
    </ul>
  );
};

export default TaskList;
