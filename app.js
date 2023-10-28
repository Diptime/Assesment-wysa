import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import AssesmentRouter from "./routes/assesment-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/assesment", AssesmentRouter);
mongoose
  .connect(
    "mongodb+srv://diptiimee:0lxZlVNcOuquWtFg@cluster0.qthnzuf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
