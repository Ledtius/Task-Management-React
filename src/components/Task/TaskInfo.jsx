import taskInfoStyles from "../../styles/Task/TaskInfo.module.css";

const TaskInfo = ({ taskList }) => {
  const taskListComp = taskList.filter(({ state }) => state === true).length;

  const totalTask = taskList.length;

  const percentComplete = Math.round((taskListComp * 100) / totalTask) || 0;

  const styleChange = () => {
    return { width: `${percentComplete}%` };
  };

  const tempLiPercentComplete = `${percentComplete || 0}%`;
  return (
    <section className={taskInfoStyles.info}>
      <div className={taskInfoStyles.bar} title="Barra de progreso">
        <div
          className={taskInfoStyles.progressLevel}
          style={styleChange()}
        ></div>
        <small className={taskInfoStyles.progressValue}>
          {tempLiPercentComplete}
        </small>
      </div>
      <small className={taskInfoStyles.score} title="Marcador de tareas">
        {taskListComp}/{totalTask}
      </small>
    </section>
  );
};

export default TaskInfo;
