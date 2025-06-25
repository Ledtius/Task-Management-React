import taskFilterStyles from "../../styles/Task/TaskFilter.module.css";

import { ListTodo, LayoutList, ListChecks, Search } from "lucide-react";

const TaskFilter = ({
  listState,
  setListState,
  filterInput,
  setFilterInput,
}) => {
  const handleBtnIdValue = (e) => {
    const btnIdValue = e.target.id;
    setListState(btnIdValue);
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setFilterInput(inputValue);
  };

  const handleStylesAll = () => {
    if (listState === "all") {
      return {
        transform: "scale(1.1)",
        boxShadow: "0px 2px 10px var(--color-bg-all)",
      };
    }
  };

  const handleStylesIncom = () => {
    if (listState === "incomplete") {
      return {
        transform: "scale(1.1)",
        boxShadow: "0px 2px 10px var(--color-bg-incomplete)",
      };
    }
  };

  const handleStylesComp = () => {
    if (listState === "complete") {
      return {
        transform: "scale(1.1)",
        boxShadow: "0px 2px 10px var(--color-bg-completed)",
      };
    }
  };

  return (
    <section className={taskFilterStyles.filter}>
      <nav className={taskFilterStyles.nav}>
        <button
          className={taskFilterStyles.filterBtn}
          id="all"
          style={handleStylesAll()}
          onClick={handleBtnIdValue}
          title="Filtro de todas las tareas (completas e incompletas)"
        >
          <ListTodo className={taskFilterStyles.icon} />
          Todas
        </button>
        <button
          className={taskFilterStyles.filterBtn}
          id="incomplete"
          style={handleStylesIncom()}
          onClick={handleBtnIdValue}
          title="Filtro de tareas incompletadas"
        >
          <LayoutList className={taskFilterStyles.icon} />
          Incompletas
        </button>
        <button
          className={taskFilterStyles.filterBtn}
          id="complete"
          style={handleStylesComp()}
          onClick={handleBtnIdValue}
          title="Filtro de tareas completadas"
        >
          <ListChecks className={taskFilterStyles.icon} />
          Completas
        </button>
      </nav>
      <form className={taskFilterStyles.form} onSubmit={handleForm}>
        <input
          className={taskFilterStyles.input}
          type="text"
          placeholder="Escribe la tarea a buscar"
          value={filterInput}
          onChange={handleInput}
        />
        <button className={taskFilterStyles.searchBtn}>
          <Search className={taskFilterStyles.iconSearch} />
        </button>
      </form>
    </section>
  );
};

export default TaskFilter;
