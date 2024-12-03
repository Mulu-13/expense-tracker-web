import express from "express";
const app = express();
import cors from "cors";
import { connect } from "mongoose";

import expenseRouter from "./routes/expenseRoute.js"

app.use(cors());
app.use(express.json())

app.use("/expenses",expenseRouter)

app.get("/", (req, res) => {
  res.json({
    users: ["userOne", "userTwo", "userThree"],
  });
});


connect("mongodb://127.0.0.1:27017/expenses").then(()=>{
  console.log("object")
  app.listen(5000, () => {
    console.log("server started");
  });
}).catch((error)=>{
  console.log(object)
})
