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
      <progress
        value={taskListComp}
        max={totalTask}
        className={taskInfoStyles.progressBar}
      >
        Progress
      </progress>
      <div className={taskInfoStyles.bar2}>
        <div className={taskInfoStyles.progress} style={styleChange()}></div>
        {percentComplete}%
      </div>
      <small className={taskInfoStyles.score}>
        {taskListComp}/{totalTask}
      </small>
    </section>
  );
};

export default TaskInfo;
