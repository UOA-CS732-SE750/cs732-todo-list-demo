import { useState } from "react";
import { initialTodos } from "./initial-todos";

function App() {
  return (
    <>
      <nav>
        <h1>My Todo List</h1>
        <ul>
          {initialTodos.map((todo) => (
            <li key={todo._id}>{todo.description}</li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default App;
