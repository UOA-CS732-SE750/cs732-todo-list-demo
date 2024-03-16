import dayjs from "dayjs";
import { v4 as uuid } from "uuid";

let todos = [
  {
    _id: "3e4876d2-3f87-486f-8f8e-46b2120c7493",
    description: "Teach my cat to play chess",
    isComplete: false,
    dueDate: "2024-03-12"
  },
  {
    _id: "5fdb4cec-df9f-4502-8c6a-c8f39dc4c918",
    description: "Invent a new language and converse with aliens",
    isComplete: false,
    dueDate: "2024-03-20"
  },
  {
    _id: "32ace4a3-4291-42e2-bec2-27c83c3400d8",
    description: "Climb Mount Everest wearing flip-flops",
    isComplete: false,
    dueDate: "2024-04-06"
  },
  {
    _id: "d7191ef7-d570-41c5-b978-9faad9f662df",
    description: "Swim around the world in a day",
    isComplete: true,
    dueDate: "2024-03-10"
  },
  {
    _id: "8ddcde00-1c8d-4391-a9cb-e98f57d5b3d5",
    description: "Win a break-dancing contest against a kangaroo",
    isComplete: false,
    dueDate: "2022-09-01" // this incomplete todo has a dueDate in the past
  }
];

/**
 * Gets an array of all todo items.
 *
 * @returns all todo items
 */
export async function retrieveTodos() {
  return todos;
}

export async function createTodo(description, dueDate) {
  if (!description || !dueDate) throw "description and dueDate are required";
  if (!dayjs(dueDate).isValid()) throw "dueDate is not a valid date";

  const newTodo = {
    _id: uuid(),
    description,
    dueDate,
    isComplete: false
  };

  todos.push(newTodo);
  return newTodo;
}

export async function updateTodo(id, isComplete) {
  if (typeof isComplete !== "boolean") throw "isComplete must be true or false";

  const todo = todos.find((todo) => todo._id === id);
  if (!todo) return false;
  todo.isComplete = isComplete;
  return true;
}

export async function deleteTodo(id) {
  todos = todos.filter((todo) => todo._id !== id);
}
