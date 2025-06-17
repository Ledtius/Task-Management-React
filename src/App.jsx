import { useState } from "react";
import { useEffect } from "react";

import Header from "./components/Layout/Header";

import TaskForm from "./components/Task/TaskForm";

import TaskFilter from "./components/Task/TaskFilter";

import TaskList from "./components/Task/TaskList";

import Footer from "./components/Layout/Footer";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const [listState, setListState] = useState("all");

  return (
    <>
      <Header />
      <TaskForm taskList={taskList} setTaskList={setTaskList} />
      <TaskFilter listState={listState} setListState={setListState} />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        listState={listState}
      />
      <Footer />
    </>
  );
};

export default App;
