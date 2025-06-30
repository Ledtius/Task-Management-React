import { useState } from "react";
import { LucideEdit, CirclePlus, Trash2, Save, Ban } from "lucide-react";

import TaskName from "./TaskName";
import TaskDescription from "./TaskDescription";

import taskItemStyles from "../../styles/Task/TaskItem.module.css";

const TaskItem = ({
  idTask,
  taskName,
  taskDescrip,
  taskState,
  taskList,
  setTaskList,
}) => {
  /* Description state variables */

  // const [descripInput, setDescripInput] = useState(taskDescrip);

  // const [editDescrip, setEditDescrip] = useState("");

  // const [showAddDecrip, setShowAddDescrip] = useState(false);

  // const [showAddDescripBtn, setShowAddDescripBtn] = useState(() => {
  //   if (taskDescrip) return false;
  //   return true;
  // });

  // const [showDescripMsg, setShowDescripMsg] = useState(() => {
  //   if (taskDescrip) return true;
  //   return false;
  // });

  // const [showEditDescrip, setShowEditDescrip] = useState(false);

  // const [showAlertAddDescrip, setShowAlertAddDescrip] = useState(false);

  // const [showAlertEditDescrip, setShowAlertEditDescrip] = useState(false);

  /* Description functions section */

  // const handleAddDescripBtn = () => {
  //   setShowAddDescrip(true);
  //   setShowAddDescripBtn(false);
  // };

  // const handleAddDescripInput = (e) => {
  //   const inputValue = e.target.value;

  //   setDescripInput(inputValue);
  // };

  // const handleAddDescripAddBtn = (e) => {
  //   console.log(taskDescrip);
  //   if (descripInput) {
  //     setShowAddDescripBtn(false);
  //     setShowAddDescrip(false);
  //     setShowDescripMsg(true);
  //     setTaskList((prevTaskList) => {
  //       return prevTaskList.map((task) => {
  //         if (task.name === taskName) {
  //           return { ...task, description: descripInput };
  //         }
  //         return task;
  //       });
  //     });
  //   } else {
  //     setTimeout(() => {
  //       setShowAlertAddDescrip(false);
  //     }, 1500);
  //     setShowAlertAddDescrip(true);
  //   }
  // };

  // const handleAddDescripCancelBtn = () => {
  //   setShowAddDescrip(false);
  //   setShowAddDescripBtn(true);
  //   setDescripInput("");
  // };

  // const handleEditDescripBtn = () => {
  //   setShowEditDescrip(true);
  //   setShowDescripMsg(false);
  // };

  // const handleEditDescripInput = (e) => {
  //   const inputValue = e.target.value;

  //   setEditDescrip(inputValue);
  // };

  // const handleEditDescripAcceptBtn = () => {
  //   console.log(editDescrip);
  //   if (editDescrip) {
  //     setShowEditDescrip(false);
  //     setShowDescripMsg(true);
  //     setTaskList((prevTaskList) => {
  //       return prevTaskList.map((task) => {
  //         if (task.description === taskDescrip) {
  //           return { ...task, description: editDescrip };
  //         }
  //         return task;
  //       });
  //     });
  //   } else {
  //     console.log("12");
  //     setTimeout(() => {
  //       setShowAlertEditDescrip(false);
  //     }, 1500);
  //     setShowAlertEditDescrip(true);
  //   }
  // };

  // const handleEditDescripCancelBtn = () => {
  //   setShowEditDescrip(false);
  //   setShowDescripMsg(true);
  //   setEditDescrip(taskDescrip);
  // };

  // const handleEditDescripDeleteBtn = () => {
  //   // setShowAddDescrip(true);
  //   setDescripInput("");
  //   setShowAddDescripBtn(true);

  //   setShowDescripMsg(false);
  //   setTaskList((prevTaskList) => {
  //     return prevTaskList.map((task) => {
  //       if (task.id === idTask) {
  //         return { ...task, description: "" };
  //       }
  //       return task;
  //     });
  //   });
  // };

  /* Checkbox functions section */

  const handleCheckbox = (e) => {
    const checkboxValue = e.target.checked;

    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => {
        if (task.id === idTask) {
          return { ...task, state: checkboxValue };
        }
        return task;
      })
    );
  };

  /* Task function  */

  const handleTaskDeleteBtn = () => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((task) => {
        if (task.id !== idTask) {
          return task;
        }
      });
    });
  };

  return (
    <li>
      <article className={taskItemStyles.taskItem}>
        <label
          className={taskItemStyles.checkboxContent}
          title="Marcar/Desmarcar tarea"
        >
          <input
            type="checkbox"
            onChange={handleCheckbox}
            checked={taskState}
            className={taskItemStyles.checkbox}
          />
          <span className={taskItemStyles.checkmark}></span>
        </label>

        <section className={taskItemStyles.nameDescrip}>
          <TaskName
            idTask={idTask}
            taskName={taskName}
            taskList={taskList}
            setTaskList={setTaskList}
            taskState={taskState}
          />
          <TaskDescription
            taskList={taskList}
            setTaskList={setTaskList}
            taskDescrip={taskDescrip}
            taskName={taskName}
            idTask={idTask}
          />
        </section>

        <button
          className={taskItemStyles.deleteBtn}
          onClick={handleTaskDeleteBtn}
          title="Eliminar tarea"
        >
          <Trash2 className={taskItemStyles.deleteIcon} />
        </button>
      </article>
    </li>
  );
};

export default TaskItem;
