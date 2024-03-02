import "./App.css";
import TasksRemaining from "./components/TasksRemaining";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function App() {
  console.count("App rendered");
  return (
    <main>
      <TodoAdd />
      <TodoList />
      <TasksRemaining />
    </main>
  );
}

export default App;
