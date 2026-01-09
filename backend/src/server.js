import express from "express";
import router from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }))

app.use("/api/tasks", router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port: ", PORT);
    });
});



