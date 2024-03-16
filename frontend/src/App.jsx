import { useState } from "react";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";
import NewTodoForm from "./components/NewTodoForm";
import SearchBar from "./components/SearchBar";
import { useTodos } from "./js/use-todos";

function App() {
  const { todos, createTodo, updateTodo, deleteTodo } = useTodos();
  const [searchString, setSearchString] = useState("");

  const filteredTodos = todos.filter(
    (todo) =>
      searchString === "" || todo.description.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <>
      <nav className={styles.nav}>
        <h1>My Todo List</h1>
      </nav>
      <div className={styles.container}>
        <main>
          <SearchBar
            searchString={searchString}
            onSearchStringChanged={(s) => setSearchString(s)}
          />

          <TodoList todos={filteredTodos} onTodoClicked={updateTodo} onTodoDeleted={deleteTodo} />

          <NewTodoForm onSubmit={createTodo} />
        </main>
      </div>
    </>
  );
}

export default App;
