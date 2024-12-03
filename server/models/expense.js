import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
  },
});

export const Expense = mongoose.model("expense", expenseSchema);
