const TaskFilter = ({ listState, setListState }) => {
  const handleBtnIdValue = (e) => {
    const btnIdValue = e.target.id;
    setListState(btnIdValue);
  };

  return (
    <section>
      <nav>
        <button id="all" onClick={handleBtnIdValue}>
          Todos
        </button>
        <button id="incomplete" onClick={handleBtnIdValue}>
          Incompletas
        </button>
        <button id="complete" onClick={handleBtnIdValue}>
          Completas
        </button>
      </nav>
      <form>
        <input type="text" />
        <button>Enviar</button>
      </form>
    </section>
  );
};

export default TaskFilter;
