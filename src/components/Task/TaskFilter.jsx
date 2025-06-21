import filterStyles from "../../styles/Task/TaskFilter.module.css";

import { ListTodo, LayoutList, ListChecks, Search } from "lucide-react";

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
          <ListTodo />
        </button>
        <button id="incomplete" onClick={handleBtnIdValue}>
          <LayoutList />
        </button>
        <button id="complete" onClick={handleBtnIdValue}>
          <ListChecks />
        </button>
      </nav>
      <form onSubmit={handleForm}>
        <input type="text" value={filterInput} onChange={handleInput} />
        <button>
          <Search />
        </button>
      </form>
    </section>
  );
};

export default TaskFilter;
