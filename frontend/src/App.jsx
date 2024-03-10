import { useState } from "react";
import { initialTodos } from "./initial-todos";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <nav className={styles.nav}>
        <h1>My Todo List</h1>
      </nav>
      <div className={styles.container}>
        <main>
          <TodoList todos={initialTodos} />
        </main>
      </div>
    </>
  );
}

export default App;
