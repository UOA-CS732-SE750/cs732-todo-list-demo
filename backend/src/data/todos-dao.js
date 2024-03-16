import dayjs from "dayjs";
import { Todo } from "./schema.js";

/**
 * Gets an array of all todo items.
 *
 * @returns all todo items
 */
export async function retrieveTodos() {
  return await Todo.find();
}

export async function createTodo(description, dueDate) {
  if (!description || !dueDate) throw "description and dueDate are required";
  if (!dayjs(dueDate).isValid()) throw "dueDate is not a valid date";

  const newTodo = new Todo({
    description,
    dueDate,
    isComplete: false
  });

  await newTodo.save();
  return newTodo;
}

export async function updateTodo(id, isComplete) {
  if (typeof isComplete !== "boolean") throw "isComplete must be true or false";

  const todo = await Todo.findByIdAndUpdate(id, { isComplete });
  return !!todo;
}

export async function deleteTodo(id) {
  await Todo.findByIdAndDelete(id);
}
