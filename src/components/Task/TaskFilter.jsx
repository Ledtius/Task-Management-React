import { useEffect, useState } from "react";

const TaskFilter = ({ setListState, filterInput, setFilterInput }) => {
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
      <form onSubmit={handleForm}>
        <input type="text" value={filterInput} onChange={handleInput} />
        <button>Enviar</button>
      </form>
    </section>
  );
};

export default TaskFilter;
