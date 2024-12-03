import express from "express";
import { Expense } from "../models/expense.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, amount, date } = req.body;
    if (!title || !amount || !date) {
      return res.status(400).send({
        msg: "fill all fields",
      });
    }

    const newExpense = {
      title,
      amount,
      date,
    };
    const expense = await Expense.create(newExpense);
    return res.send(expense).status(201);
  } catch (error) {
    console.log(error);
    res.send({
      msg: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find({});
    return res.json({
      count: expenses.length,
      data: expenses,
    });
  } catch (error) {
    res.send({
      msg: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findById(id);
    if (!expense) {
      return res.json({
        msg: "Not Found",
      });
    }
    return res.json(expense);
  } catch (error) {
    res.send({
      msg: error.message,
    });
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const { title, amount, date } = req.body;
    if (!title || !amount || !date) {
      return res.send({
        msg: "fill all fields",
      });
    }

    const updateExpense = {
      title,
      amount,
      date,
    };
    const { id } = req.params;
    const expense = await Expense.findByIdAndUpdate(id, updateExpense, {
      new: true,
    });
    if (!expense) {
      return res.send({
        msg: "Something wrong",
      });
    }
    console.log(expense);
    res.send(expense);
  } catch (error) {
    res.status(400).send({
      msg: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findByIdAndDelete(id);

    if (!expense) {
      return res.status(404).json({
        msg: "Expense not found",
      });
    }
    return res.status(200).send({
      msg: "Deleted Successfully",
    });
  } catch (error) {}
});

export default router;
