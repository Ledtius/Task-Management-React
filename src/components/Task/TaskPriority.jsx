import { LucideStar, LucideDiamondPlus } from "lucide-react";
import { useEffect, useState } from "react";
import taskPriorityStyles from "../../styles/Task/TaskPriority.module.css";

const TaskPriority = () => {
  const [priorityStyles, setPriorityStyles] = useState({
    showMessage: true,
    showPriority: false,
  });

  const { showMessage, showPriority } = priorityStyles;

  const handleMessage = () => {
    setPriorityStyles({ showMessage: false, showPriority: true });
  };

  const handleHoverStyles = () => {};

  const handleEnterMouse = (e) => {
    console.log("Entro");
    console.log(e.currentTarget.id);
  };
  return (
    <section className={taskPriorityStyles.prioritySection}>
      {showMessage && (
        <div className={taskPriorityStyles.btnMsg} onClick={handleMessage}>
          <small className={taskPriorityStyles.msg}>Añadir prioridad</small>
          <button className={taskPriorityStyles.btn}>
            <LucideDiamondPlus className={taskPriorityStyles.Addicon} />
          </button>
        </div>
      )}
      {showPriority && (
        <nav className={taskPriorityStyles.priorityNav}>
          <LucideStar id="1" className={taskPriorityStyles.starIcon} />
          <LucideStar
            id="2"
            className={taskPriorityStyles.starIcon}
            onMouseEnter={handleEnterMouse}
          />
          <LucideStar id="3" className={taskPriorityStyles.starIcon} />
        </nav>
      )}{" "}
    </section>
  );
};

export default TaskPriority;
