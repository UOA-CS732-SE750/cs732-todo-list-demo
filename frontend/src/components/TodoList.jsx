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
  return <li>{todo.description}</li>;
}
