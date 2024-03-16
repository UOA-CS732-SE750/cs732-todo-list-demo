import { Router } from "express";

const router = Router();

import todosRoutes from "./api-todos.js";
router.use("/todos", todosRoutes);

export default router;
