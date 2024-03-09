import dayjs from "dayjs";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoListItem({ todo }) {
  const isOverdue = dayjs().isAfter(todo.dueDate);
  const status = todo.isComplete ? "Complete!" : isOverdue ? "Overdue" : "Pending";

  return (
    <li>
      <div>
        <h2>{todo.description}</h2>
        <p>
          Due {dayjs(todo.dueDate).format("dddd Do MMMM, YYYY")}{" "}
          <em>({dayjs(todo.dueDate).fromNow()})</em>
        </p>
      </div>
      <div>
        <button>{status}</button>
        <button>X</button>
      </div>
    </li>
  );
}
