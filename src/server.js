import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import DealerRouter from "../routes/DealerRoute.js"

dotenv.config();

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use("/api/dealers", DealerRouter)

app.get("/", (req, res) => {
    res.send("main api path")
})

app.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});