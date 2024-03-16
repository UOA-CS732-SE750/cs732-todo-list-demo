import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";
import NewTodoForm from "./components/NewTodoForm";
import { v4 as uuid } from "uuid";
import SearchBar from "./components/SearchBar";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/todos").then((response) => setTodos(response.data));
  }, []);

  function handleUpdateTodo(todo) {
    const oldTodos = todos;
    const newTodos = todos.map((oldTodo) => {
      if (oldTodo !== todo) return oldTodo;
      return { ...todo, isComplete: !todo.isComplete };
    });

    setTodos(newTodos);

    axios
      .patch(`http://localhost:3000/api/todos/${todo._id}`, { isComplete: !todo.isComplete })
      .catch((err) => {
        console.log(err);
        setTodos(oldTodos);
      });
  }

  function handleDeleteTodo(todo) {
    const oldTodos = todos;
    const newTodos = todos.filter((oldTodo) => oldTodo !== todo);
    setTodos(newTodos);

    axios.delete(`http://localhost:3000/api/todos/${todo._id}`).catch((err) => {
      console.log(err);
      setTodos(oldTodos);
    });
  }

  function handleNewTodo(description, dueDate) {
    const oldTodos = todos;
    const newTodo = {
      _id: uuid(),
      description,
      dueDate,
      isComplete: false
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);

    axios
      .post("http://localhost:3000/api/todos", { description, dueDate })
      .then((response) => {
        setTodos([...oldTodos, response.data]);
      })
      .catch((err) => {
        console.log(err);
        setTodos(oldTodos);
      });
  }

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

          <TodoList
            todos={filteredTodos}
            onTodoClicked={handleUpdateTodo}
            onTodoDeleted={handleDeleteTodo}
          />

          <NewTodoForm onSubmit={handleNewTodo} />
        </main>
      </div>
    </>
  );
}

export default App;
