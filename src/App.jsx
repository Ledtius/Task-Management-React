import Header from "./components/Layout/Header";

import TaskForm from "./components/Task/TaskForm";

import TaskFilter from "./components/Task/TaskFilter";

import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <>
      <Header />
      <TaskForm />
      <TaskFilter />
      <Footer />
    </>
  );
};

export default App;
