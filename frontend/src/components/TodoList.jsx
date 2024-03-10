import dayjs from "dayjs";
import styles from "./TodoList.module.css";

export default function TodoList({ todos }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoListItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoListItem({ todo }) {
  const isOverdue = dayjs().isAfter(todo.dueDate);
  const status = todo.isComplete ? "Complete!" : isOverdue ? "Overdue" : "Pending";
  const buttonClass = todo.isComplete
    ? styles.complete
    : isOverdue
      ? styles.overdue
      : styles.pending;

  return (
    <li className={styles.item}>
      <div>
        <h2>{todo.description}</h2>
        <p>
          Due {dayjs(todo.dueDate).format("dddd Do MMMM, YYYY")}{" "}
          <em>({dayjs(todo.dueDate).fromNow()})</em>
        </p>
      </div>
      <button className={buttonClass}>{status}</button>
      <button>X</button>
    </li>
  );
}
