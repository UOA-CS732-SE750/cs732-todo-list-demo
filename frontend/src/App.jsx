import { useState } from "react";
import { initialTodos } from "./initial-todos";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";
import NewTodoForm from "./components/NewTodoForm";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleTodoClicked(todo) {
    // console.log(todo);

    const newTodos = todos.map((oldTodo) => {
      if (oldTodo !== todo) return oldTodo;
      return { ...todo, isComplete: !todo.isComplete };
    });

    setTodos(newTodos);
  }

  function handleDeleteTodo(todo) {
    const newTodos = todos.filter((oldTodo) => oldTodo !== todo);
    setTodos(newTodos);
  }

  function handleNewTodo(description, dueDate) {
    const newTodo = {
      _id: uuid(),
      description,
      dueDate,
      isComplete: false
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  return (
    <>
      <nav className={styles.nav}>
        <h1>My Todo List</h1>
      </nav>
      <div className={styles.container}>
        <main>
          <TodoList
            todos={todos}
            onTodoClicked={handleTodoClicked}
            onTodoDeleted={handleDeleteTodo}
          />

          <NewTodoForm onSubmit={handleNewTodo} />
        </main>
      </div>
    </>
  );
}

export default App;
