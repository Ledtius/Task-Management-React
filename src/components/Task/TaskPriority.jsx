import { LucideStar, LucideDiamondPlus } from "lucide-react";
import { useEffect, useState } from "react";
import taskPriorityStyles from "../../styles/Task/TaskPriority.module.css";

const TaskPriority = () => {
  const [priorityStyles, setPriorityStyles] = useState({
    showMessage: true,
    showPriority: false,
  });

  const [priorityValue, setPriorityValue] = useState("");

  const { showMessage, showPriority } = priorityStyles;

  const handleMessage = () => {
    setPriorityStyles({ showMessage: false, showPriority: true });
  };

  useEffect(() => {
    console.log(priorityValue);
  }, [priorityValue]);

  const handleStarValue = (e) => {
    const valueId = e.currentTarget.id;

    setPriorityValue(valueId);
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
          <button
            id="1"
            className={taskPriorityStyles.starBtn}
            onClick={handleStarValue}
          >
            <LucideStar className={taskPriorityStyles.starIcon} />
            <small className={taskPriorityStyles.starValue}>1</small>
          </button>
          <button
            className={taskPriorityStyles.starBtn}
            id="2"
            onClick={handleStarValue}
          >
            <LucideStar className={taskPriorityStyles.starIcon} />
          </button>
          <button
            className={taskPriorityStyles.starBtn}
            id="3"
            onClick={handleStarValue}
          >
            <LucideStar className={taskPriorityStyles.starIcon} />
          </button>
        </nav>
      )}{" "}
    </section>
  );
};

export default TaskPriority;
