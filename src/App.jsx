import { useState } from "react";
import { useEffect } from "react";

import Header from "./components/Layout/Header";

import TaskForm from "./components/Task/TaskForm";

import TaskFilter from "./components/Task/TaskFilter";

import TaskList from "./components/Task/TaskList";

import TaskDelete from "./components/Task/TaskDelete";
import appStyles from "./styles/App.module.css";

import Footer from "./components/Layout/Footer";

const App = () => {
  const [taskList, setTaskList] = useState(() => {
    // const defaultValue = [];

    return JSON.parse(localStorage.getItem("taskList")) || [];
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    console.log(taskList);
  }, [taskList]);

  const [listState, setListState] = useState("all");

  const [filterInput, setFilterInput] = useState("");

  return (
    <>
      <Header />
      <TaskForm taskList={taskList} setTaskList={setTaskList} />
      <TaskFilter
        listState={listState}
        setListState={setListState}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
      />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        listState={listState}
        filterInput={filterInput}
      />
      <TaskDelete
        taskList={taskList}
        setTaskList={setTaskList}
        listState={listState}
      />

      <Footer />
    </>
  );
};

export default App;
