const TaskFilter = () => {
  return (
    <div>
      <div>
        <button>Todos</button>
        <button>Incompletas</button>
        <button>Completas</button>
      </div>
      <form>
        <input type="text" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default TaskFilter;
