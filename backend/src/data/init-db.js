import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { Todo } from "./schema.js";

await mongoose.connect(process.env.DB_URL);
console.log("Connected to database");

let todos = [
  {
    _id: "000000000000000000000001",
    description: "Teach my cat to play chess",
    isComplete: false,
    dueDate: "2024-03-12"
  },
  {
    _id: "000000000000000000000002",
    description: "Invent a new language and converse with aliens",
    isComplete: false,
    dueDate: "2024-03-20"
  },
  {
    _id: "000000000000000000000003",
    description: "Climb Mount Everest wearing flip-flops",
    isComplete: false,
    dueDate: "2024-04-06"
  },
  {
    _id: "000000000000000000000004",
    description: "Swim around the world in a day",
    isComplete: true,
    dueDate: "2024-03-10"
  },
  {
    _id: "000000000000000000000005",
    description: "Win a break-dancing contest against a kangaroo",
    isComplete: false,
    dueDate: "2022-09-01" // this incomplete todo has a dueDate in the past
  }
];

try {
  await Todo.deleteMany({});
  await Todo.bulkSave(todos.map((t) => new Todo(t)));
} finally {
  await mongoose.disconnect();
  console.log("Disconnected from database");
}
