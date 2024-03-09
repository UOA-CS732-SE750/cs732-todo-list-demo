import { useState } from "react";
import { initialTodos } from "./initial-todos";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <nav>
        <h1>My Todo List</h1>
        <TodoList todos={initialTodos} />
      </nav>
    </>
  );
}

export default App;
