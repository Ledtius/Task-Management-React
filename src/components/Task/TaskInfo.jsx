import taskInfoStyles from "../../styles/Task/TaskInfo.module.css";

const TaskInfo = ({ taskList }) => {
  const taskListComp = taskList.filter(({ state }) => state === true).length;

  const totalTask = taskList.length;

  const percentComplete = Math.round((taskListComp * 100) / totalTask);

  const styleChange = () => {
    return { width: `${percentComplete}%` };
  };

  console.log(taskListComp);
  console.log(percentComplete);
  return (
    <section className={taskInfoStyles.info}>
      <div className={taskInfoStyles.bar}>
        <div className={taskInfoStyles.progressLevel} style={styleChange()}></div>
        <small className={taskInfoStyles.progressValue}>{percentComplete}%</small>
      </div>
      <small className={taskInfoStyles.score}>
        {taskListComp}/{totalTask}
      </small>
    </section>
  );
};

export default TaskInfo;
