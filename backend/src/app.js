import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   return res.json({ message: "Hello, world!" });
// });

import routes from "./routes/routes.js";
app.use("/", routes);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}!`));
