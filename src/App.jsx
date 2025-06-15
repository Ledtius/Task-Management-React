import { useState } from "react";
import { useEffect } from "react";

import Header from "./components/Layout/Header";

import TaskForm from "./components/Task/TaskForm";

import TaskFilter from "./components/Task/TaskFilter";

import TaskList from "./components/Task/TaskList";

import Footer from "./components/Layout/Footer";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <Header />
      <TaskForm taskList={taskList} setTaskList={setTaskList} />
      <TaskFilter />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <Footer />
    </>
  );
};

export default App;
