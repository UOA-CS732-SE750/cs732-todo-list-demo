import { Router } from "express";
import { retrieveTodos } from "../../data/todos-dao.js";

const router = Router();

// On a GET request to /api/todos, returns a 200 OK response with all todos.
router.get("/", async (req, res) => {
  return res.json(await retrieveTodos());
});

export default router;
