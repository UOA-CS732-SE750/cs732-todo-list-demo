import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  description: { type: String, required: true },
  dueDate: { type: String, required: true },
  isComplete: { type: Boolean, required: true }
});

export const Todo = mongoose.model("Todo", todoSchema);
