import { useState } from "react";

import taskItemStyles from "../../styles/Task/TaskItem.module.css";

import { LucideEdit, Save, Ban } from "lucide-react";

const TaskName = ({ idTask, taskName, taskList, setTaskList, taskState }) => {
  const [taskInput, setTaskInput] = useState(taskName);

  const [taskNameShow, setTaskNameShow] = useState({
    showEditTaskPanel: false,
    showEditTaskBtn: true,
    showAlertEditTaskSame: false,
    showAlertEditTaskVoid: false,
    showTaskName: true,
  });

  const {
    showTaskName,
    showEditTaskBtn,
    showEditTaskPanel,
    showAlertEditTaskSame,
    showAlertEditTaskVoid,
  } = taskNameShow;

  const handleEditTaskBtn = () => {
    setTaskNameShow({
      ...taskNameShow,
      showTaskName: false,
      showEditTaskBtn: false,
      showEditTaskPanel: true,
    });
  };

  const handleEditTaskInput = (e) => {
    const inputValue = e.target.value;

    setTaskInput(inputValue);
  };

  const handleEditTaskAcceptBtn = () => {
    if (taskInput) {
      const sameTaskName = taskList.some(({ name, id } = task) => {
        return name.toLowerCase() === taskInput.toLowerCase() && idTask !== id;
      });

      if (!sameTaskName) {
        setTaskList((prevTaskList) =>
          prevTaskList.map((task) => {
            if (task.id === idTask) {
              return { ...task, name: taskInput };
            }
            return task;
          })
        );

        // setShowEditTaskBtn(true);
        // setShowEditTask(false);
        // setShowTask(true);

        setTaskNameShow({
          ...taskNameShow,
          showEditTaskBtn: true,
          showEditTaskPanel: false,
          showTaskName: true,
        });
      } else {
        setTimeout(() => {
          setTaskNameShow({ ...taskNameShow, showAlertEditTaskSame: false });
          //   setShowAlertEditTask(false);
        }, 1500);
        // setShowAlertEditTask(true);
        setTaskNameShow({ ...taskNameShow, showAlertEditTaskSame: true });
      }
    } else {
      setTimeout(() => {
        setTaskNameShow({ ...taskNameShow, showAlertEditTaskVoid: false });
        // setShowAlertEditTaskFalsy(false);
      }, 1500);
      //   setShowAlertEditTaskFalsy(true);
      setTaskNameShow({ ...taskNameShow, showAlertEditTaskVoid: true });
    }
  };

  const handleEditTaskCancelBtn = () => {
    setTaskNameShow({
      ...taskNameShow,
      showEditTaskPanel: false,
      showTaskName: true,
      showEditTaskBtn: true,
    });

    setTaskInput(taskName);
  };

  return (
    <>
      <header className={taskItemStyles.header} onClick={handleEditTaskBtn}>
        {showTaskName && (
          <h3
            className={taskItemStyles.taskName}
            style={
              taskState
                ? {
                    textDecoration: "line-through",
                    textDecorationColor: "#2ecc71",
                  }
                : { textDecoration: "none" }
            }
            title="Nombre de la tarea"
          >
            {taskName}
          </h3>
        )}
        {showEditTaskBtn && (
          <button
            className={taskItemStyles.editBtn}
            title="Editar nombre de tarea"
          >
            <LucideEdit />
          </button>
        )}
      </header>
      {/* Panel cuando das a editar */}
      {showEditTaskPanel && (
        <div className={taskItemStyles.editAddPanel}>
          <input
            className={taskItemStyles.editAddPanelInput}
            type="text"
            placeholder={"Editando nombre..."}
            onChange={handleEditTaskInput}
            value={taskInput}
          />
          <div className={taskItemStyles.editAddPanelAlertSection}>
            {showAlertEditTaskSame && (
              <small className={taskItemStyles.editAddPanelAlert}>
                Nombre ya existente
              </small>
            )}
            {showAlertEditTaskVoid && (
              <small className={taskItemStyles.editAddPanelAlert}>
                Ingrese un valor valido
              </small>
            )}
          </div>
          <nav className={taskItemStyles.editAddPanelAC}>
            <button
              className={taskItemStyles.editAddPanelAccept}
              onClick={handleEditTaskAcceptBtn}
            >
              <Save className={taskItemStyles.editAddPanelIconBtnAccept} />
              Guardar
            </button>
            <button
              className={taskItemStyles.editAddPanelCancel}
              onClick={handleEditTaskCancelBtn}
            >
              <Ban className={taskItemStyles.editAddPanelIconBtnCancel} />
              Cancelar
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default TaskName;
