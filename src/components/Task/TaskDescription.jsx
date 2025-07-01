import { useEffect, useState } from "react";
import { LucideEdit, CirclePlus, Trash2, Save, Ban } from "lucide-react";

import taskItemStyles from "../../styles/Task/taskItem.module.css";

const TaskDescription = ({ setTaskList, taskDescrip, idTask, taskName }) => {
  const [descripInput, setDescripInput] = useState(taskDescrip);

  const [editDescrip, setEditDescrip] = useState("");

  const [taskDescripShow, setTaskDescripShow] = useState({
    showAddDescripSign: true,
    showAddDescripPanel: false,
    showAlertAddDescripPanel: false,
    showDescrip: false,
    showEditDescripPanel: false,
    showAlertEditDescripPanel: false,
  });

  const {
    showAddDescripSign,
    showAddDescripPanel,
    showAlertAddDescripPanel,
    showDescrip,
    showEditDescripPanel,
    showAlertEditDescripPanel,
  } = taskDescripShow;

  useEffect(() => {
    taskDescrip
      ? setTaskDescripShow({
          ...taskDescripShow,
          showDescrip: true,
          showAddDescripSign: false,
        })
      : setTaskDescripShow({
          ...taskDescripShow,
          showDescrip: false,
          showAddDescripSign: true,
        });
  }, [taskDescrip]);

  const handleAddDescripBtn = () => {
    setTaskDescripShow({
      ...taskDescripShow,
      showAddDescripSign: false,
      showAddDescripPanel: true,
    });

    // setShowAddDescrip(true);
    // setShowAddDescripBtn(false);
  };

  const handleAddDescripInput = (e) => {
    const inputValue = e.target.value;

    setDescripInput(inputValue);
  };

  const handleAddDescripAddBtn = (e) => {
    if (descripInput) {
      setTaskDescripShow({
        ...taskDescripShow,
        showAddDescripPanel: false,
        showDescrip: true,
      });
      // setShowAddDescripBtn(false);
      // setShowAddDescrip(false);
      // setShowDescripMsg(true);
      setTaskList((prevTaskList) => {
        return prevTaskList.map((task) => {
          if (task.name === taskName) {
            return { ...task, description: descripInput };
          }
          return task;
        });
      });
    } else {
      setTimeout(() => {
        setTaskDescripShow({
          ...taskDescripShow,
          showAlertAddDescripPanel: false,
        });
        // setShowAlertAddDescrip(false);
      }, 1500);
      setTaskDescripShow({
        ...taskDescripShow,
        showAlertAddDescripPanel: true,
      });

      // setShowAlertAddDescrip(true);
    }
  };

  const handleAddDescripCancelBtn = () => {
    setTaskDescripShow({
      ...taskDescripShow,
      showAddDescripPanel: false,
      showAddDescripSign: true,
    });
    // setShowAddDescrip(false);
    // setShowAddDescripBtn(true);
    setDescripInput("");
  };

  const handleEditDescripBtn = () => {
    setTaskDescripShow({
      ...taskDescripShow,
      showEditDescripPanel: true,
      showDescrip: false,
    });
    // setShowEditDescrip(true);
    // setShowDescripMsg(false);
  };

  const handleEditDescripInput = (e) => {
    const inputValue = e.target.value;

    setEditDescrip(inputValue);
  };

  const handleEditDescripAcceptBtn = () => {
    if (editDescrip) {
      setTaskDescripShow({
        ...taskDescripShow,
        showEditDescripPanel: false,
        showDescrip: true,
      });
      // setShowEditDescrip(false);
      // setShowDescripMsg(true);
      setTaskList((prevTaskList) => {
        return prevTaskList.map((task) => {
          if (task.description === taskDescrip) {
            return { ...task, description: editDescrip };
          }
          return task;
        });
      });
    } else {
      setTimeout(() => {
        setTaskDescripShow({
          ...taskDescripShow,
          showAlertEditDescripPanel: false,
        });
        // setShowAlertEditDescrip(false);
      }, 1500);
      // setShowAlertEditDescrip(true);
      setTaskDescripShow({
        ...taskDescripShow,
        showAlertEditDescripPanel: true,
      });
    }
  };

  const handleEditDescripCancelBtn = () => {
    setTaskDescripShow({
      ...taskDescripShow,
      showEditDescripPanel: false,
      showDescrip: true,
    });

    // setShowEditDescrip(false);
    // setShowDescripMsg(true);
    setEditDescrip(taskDescrip);
  };

  const handleEditDescripDeleteBtn = () => {
    // setShowAddDescrip(true);
    setDescripInput("");

    setTaskDescripShow({
      ...taskDescripShow,
      showAddDescripSign: true,
      showDescrip: false,
    });

    // setShowAddDescripBtn(true);
    // setShowDescripMsg(false);
    setTaskList((prevTaskList) => {
      return prevTaskList.map((task) => {
        if (task.id === idTask) {
          return { ...task, description: "" };
        }
        return task;
      });
    });
  };
  return (
    <>
      {/* Añadir descripción */}
      {showAddDescripSign && (
        <footer
          className={taskItemStyles.footer}
          onClick={handleAddDescripBtn}
          title="Añadir descripción de la tarea"
        >
          <small className={taskItemStyles.descripMsg}>
            Añadir descripción
          </small>
          <button className={taskItemStyles.addDescripBtn}>
            <CirclePlus className={taskItemStyles.addDescripIcon} />
          </button>
        </footer>
      )}
      {/* Panel para escribir la descripción */}
      {showAddDescripPanel && (
        <div className={taskItemStyles.editAddPanel}>
          <input
            className={taskItemStyles.editAddPanelInput}
            type="text"
            placeholder="Descripción de la tarea"
            onChange={handleAddDescripInput}
            value={descripInput}
          />

          {showAlertAddDescripPanel && (
            <div className={taskItemStyles.editAddPanelAlertSection}>
              <small className={taskItemStyles.editAddPanelAlert}>
                Debes de ingresar una descripción valida
              </small>
            </div>
          )}
          <nav className={taskItemStyles.editAddPanelAC}>
            <button
              className={taskItemStyles.editAddPanelAccept}
              onClick={handleAddDescripAddBtn}
            >
              <CirclePlus
                className={taskItemStyles.editAddPanelAcceptBtnIcon}
              />
              Añadir
            </button>
            <button
              className={taskItemStyles.editAddPanelCancel}
              onClick={handleAddDescripCancelBtn}
            >
              <Ban className={taskItemStyles.editAddPanelCancelBtnIcon} />
              Cancelar
            </button>
          </nav>
        </div>
      )}

      {/* Nombre de la descripción  */}
      {showDescrip && (
        <div className={taskItemStyles.taskDescripSection}>
          <small className={taskItemStyles.taskDescrip} title="Descripción">
            {taskDescrip}
          </small>
          <nav className={taskItemStyles.taskDescripEdDe}>
            <button
              className={taskItemStyles.taskDescripEdit}
              onClick={handleEditDescripBtn}
              title="Editar descripción"
            >
              <LucideEdit className={taskItemStyles.taskDescripEditBtnIcon} />
            </button>

            <button
              className={taskItemStyles.taskDescripDelete}
              onClick={handleEditDescripDeleteBtn}
              title="Borrar descripción"
            >
              <Trash2 className={taskItemStyles.taskDescripDeleteBtnIcon} />
            </button>
          </nav>
        </div>
      )}
      {/* Panel cuando das a editar */}
      {showEditDescripPanel && (
        <div className={taskItemStyles.editAddPanel}>
          <input
            className={taskItemStyles.editAddPanelInput}
            type="text"
            placeholder={"Editando descripción..."}
            value={editDescrip}
            onChange={handleEditDescripInput}
          />
          {showAlertEditDescripPanel && (
            <div className={taskItemStyles.editAddPanelAlertSection}>
              <small className={taskItemStyles.editAddPanelAlert}>
                Debes de ingresar una descripción valida
              </small>
            </div>
          )}
          <nav className={taskItemStyles.editAddPanelAC}>
            <button
              className={taskItemStyles.editAddPanelAccept}
              onClick={handleEditDescripAcceptBtn}
            >
              <Save className={taskItemStyles.editAddPanelAcceptBtnIcon} />
              Guardar
            </button>
            <button
              className={taskItemStyles.editAddPanelCancel}
              onClick={handleEditDescripCancelBtn}
            >
              <Ban className={taskItemStyles.editAddPanelCancelBtnIcon} />
              Cancelar
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default TaskDescription;
