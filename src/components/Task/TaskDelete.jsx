const TaskDelete = ({ taskList, setTaskList, listState }) => {
  const handleBtn = () => {
    if (listState === "incomplete")
      setTaskList((prevTaskList) =>
        prevTaskList.filter(({ state }) => state !== false)
      );
    else if (listState === "complete")
      setTaskList((prevTaskList) =>
        prevTaskList.filter(({ state }) => state !== true)
      );
    else setTaskList([]);
  };

  return (
    <section>
      <button onClick={handleBtn}>Eliminar</button>
    </section>
  );
};

export default TaskDelete;
