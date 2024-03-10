import styles from "./NewTodoForm.module.css";
import { useState } from "react";
import dayjs from "dayjs";

export default function NewTodoForm({ onSubmit }) {
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(dayjs().format("YYYY-MM-DD"));

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(description, dueDate);
  }

  return (
    <div className={styles.container}>
      <h2>Add todo...</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="due-date">Due date</label>
        <input
          id="due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
